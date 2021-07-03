import Image from "next/image";
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
    return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function handleClick() {
    window.open(product.url, "blank");
  }
  return (
    <li className="flex justify-between bg-white m-1 p-4 border border-gray-300 shadow rounded-lg text-sm">
      <div className="flex flex-col justify-between">
        <div>
          <div className="font-bold text-base">{product.title}</div>
          <div className="text-gray-400">
            <s>ML: {numberWithCommas(product.mprice)}</s>
          </div>
          <div className="font-bold text-blue-700">
            {numberWithCommas(product.price)}
          </div>
        </div>
        <a
          className="flex items-center leading-8"
          href={`https://www.instagram.com/${product.author}`}
          target="_blank"
        >
          <div className="w-5 h-5 relative shadow mr-2">
            <Image
              src={product.avatar}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>@{product.author}</div>
        </a>
      </div>
      <div className="flex flex-col justifys-between">
        <div className="w-40 h-32 relative shadow">
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded mt-2"
        >
          Ver en MercadoLibre
        </button>
      </div>
    </li>
  );
};

export default Card;
