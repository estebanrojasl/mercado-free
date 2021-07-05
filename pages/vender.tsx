import { useForm, SubmitHandler } from "react-hook-form";
import { GetStaticProps } from "next";

const Sell: React.FC = () => {
  type Inputs = {
    url: string;
    price: string;
    user: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
            {...register("url")}
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
            {...register("price")}
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
            {...register("user")}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
          type="submit"
        >
          Publicar
        </button>
      </form>
      <p className="text-center text-gray-500 text-xs">
        ©2021 Mercado-free. All rights reserved.
      </p>
    </div>
  );
};

export default Sell;
