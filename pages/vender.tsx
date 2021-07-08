import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Layout from "../components/Layout/Layout";

const Sell: React.FC = () => {
  type Inputs = {
    url: string;
    price: string;
    user: string;
  };

  type MercadoData = {
    title: string;
    image: string;
    price: number;
  };

  type Product = {
    title: string;
    price: number;
    image: string;
    mprice: number;
    url: string;
    author: string;
    avatar: string;
  };

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const [published, setPublished] = useState("false");

  const fetchMercado = async (object: Inputs) => {
    try {
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(object),
      });
      const mercadoData = await response.json();
      return mercadoData;
    } catch (error) {
      console.error(error);
    }
  };

  const postProduct = async (product: Product) => {
    try {
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setPublished("loading");
    const mercadoData: MercadoData = await fetchMercado(data);
    const productData = {
      title: mercadoData.title,
      image: mercadoData.image,
      mprice: Number(mercadoData.price),
      price: Number(data.price),
      url: data.url,
      author: data.user,
      avatar: "",
    };
    postProduct(productData);
    setPublished("true");
    reset();
  };

  return (
    <>
      <Layout />
      <div className="mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-hidden"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              Link MercadoLibre
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="url"
              type="text"
              placeholder="Pega aqui tu link de MercadoLibre"
              {...register("url", {
                required: true,
              })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Precio de venta
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="Precio fuera de MercadoLibre"
              {...register("price", {
                required: true,
              })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user"
            >
              Usuario de Instagram
            </label>
            <input
              className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="user"
              type="text"
              placeholder="Usuario de Instagram ej: therock"
              {...register("user", {
                required: true,
              })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
            >
              Publicar
            </button>
            <p
              className={`font-bold text-blue-600 animate-pulse ${
                published === "loading" ? "" : "hidden"
              }`}
            >
              Cargando...
            </p>
            <p
              className={`font-bold text-blue-600 text-xl animate-bounce ${
                published === "true" ? "" : "hidden"
              }`}
            >
              🚀 Publicado!
            </p>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ©2021 Mercado-free. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Sell;
