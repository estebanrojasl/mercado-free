import Link from "next/link";

type Props = {
  className: string;
  navClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Menu: React.FC<Props> = ({ className, navClick }) => {
  return (
    <div
      className={`${className} fixed bg-white h-full w-4/5 z-50 max-w-lg`}
    >
      <div className="flex items-start justify-between m-6">
        <ul>
          <li className="mb-2">
            <Link href="/" passHref>
              <button className="font-bold" onClick={navClick}>
                Comprar
              </button>
            </Link>
          </li>
          <li>
            <Link href="/vender" passHref>
              <button className="font-bold" onClick={navClick}>
                Vender
              </button>
            </Link>
          </li>
        </ul>
        <button onClick={navClick} className="w-6 h-6 relative">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Menu;
