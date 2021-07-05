// POST /api/post
import type { NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url, price, user } = req.body;

  try {
    const browser = await puppeteer.launch();
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
        .querySelector(".price-tag-fraction")!
        .innerHTML.replace(".", "");

      return infoObject;
    });

    await browser.close();

    const result = await prisma.product.create({
      data: {
        title: mercadoInfo.title,
        url: url,
        price: Number(price),
        mprice: Number(mercadoInfo.price),
        image: mercadoInfo.image,
        author: user,
        avatar: "",
      },
    });

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}
