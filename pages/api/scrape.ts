// POST /api/post
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer-core";
// import chromium from "chrome-aws-lambda";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;

  try {
    // const browser = await puppeteer.launch({
    //   args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    //   defaultViewport: chromium.defaultViewport,
    //   executablePath: await chromium.executablePath,
    //   headless: true,
    //   ignoreHTTPSErrors: true,
    // });
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector("[class=ui-pdp-title]");
    const mercadoInfo = await page.evaluate(() => {
      const title = document.querySelector("h1")?.innerHTML;
      const image = (
        document.querySelector(
          ".ui-pdp-gallery__figure__image"
        ) as HTMLImageElement
      ).src;
      const price = document
        .querySelector(
          ".ui-pdp-price__second-line .andes-money-amount__fraction"
        )
        ?.innerHTML.replaceAll(".", "");

      return { title, image, price };
    });

    await browser.close();

    res.status(200).json(mercadoInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json("scrape error");
  }
}
