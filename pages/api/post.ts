// POST /api/post
import type { NextApiRequest, NextApiResponse } from "next";
<<<<<<< Updated upstream
import puppeteer from "puppeteer";
import chromium from "chrome-aws-lambda"
=======
>>>>>>> Stashed changes

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, price, image, mprice, url, author } = req.body;

  try {
<<<<<<< Updated upstream
    const browser = await puppeteer.launch({
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector("[class=ui-pdp-title]");
    const mercadoInfo = await page.evaluate(() => {
      const infoObject = {
        title: "",
        price: "",
        image: "",
      };
      infoObject.title = document.querySelector("h1")!.innerHTML;
      const image = <HTMLImageElement>(
        document.querySelector(".ui-pdp-gallery__figure__image")!
      );
      infoObject.image = image.src;
      infoObject.price = document
        .querySelector(".ui-pdp-price__second-line .price-tag-fraction")!
        .innerHTML.replace(".", "");

      return infoObject;
    });

    await browser.close();

=======
>>>>>>> Stashed changes
    const result = await prisma.product.create({
      data: {
        title: title,
        url: url,
        price: price,
        mprice: mprice,
        image: image,
        author: author,
        avatar: "",
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json("post error");
  }
}
