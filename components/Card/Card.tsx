import Image from "next/image";

import avatar from "../../public/avatar.webp";

export interface CardProps {
  id: number;
  title: string;
  url: string;
  price: number;
  mprice: number;
  image: string;
  author: string;
  avatar: string;
}

interface props {
  product: CardProps;
}

const Card: React.FC<props> = ({ product }) => {
  function numberWithCommas(price: number) {
    return "$ " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function handleMlClick() {
    window.open(product.url, "blank");
  }
  function handleInstaClick() {
    window.open(`https://www.instagram.com/${product.author}`, "blank");
  }
  return (
    <li className="flex justify-between bg-white m-1 p-4 border border-gray-300 shadow rounded-lg text-sm">
      <div className="flex flex-col justify-between pr-2">
        <div>
          <div className="font-bold text-base">{product.title}</div>
          <div className="text-gray-400">
            <s>ML: {numberWithCommas(product.mprice)}</s>
          </div>
          <div className="font-bold text-blue-700 mb-2">
            {numberWithCommas(product.price)}
          </div>
          <a
            className="flex items-center leading-8"
            href={`https://www.instagram.com/${product.author}`}
            target="_blank"
          >
            <div className="w-5 h-5 relative shadow mr-2">
              <Image
                src={avatar}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <div className="text-xs">@{product.author}</div>
          </a>
        </div>
        <button
          onClick={handleInstaClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold w-28 
          py-2 px-4 rounded mt-2"
        >
          Contactar
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="w-40 h-40 shadow">
          <img
            className="w-full h-full rounded-sm object-cover"
            src={product.image}
            alt="imagen del producto"
          />
        </div>
        <button
          onClick={handleMlClick}
          className="bg-yellow-500 hover:bg-yellow-700 text-white text-xs font-bold py-2 px-4 rounded mt-2"
        >
          Ver en MercadoLibre
        </button>
      </div>
    </li>
  );
};

export default Card;
