// POST /api/post
import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, price, image, mprice, url, author } = req.body;

  try {
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
