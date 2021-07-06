import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import Menu from "../Menu/Menu";
import Magnifier from "../Magnifier/Magnifier";

import menu from "../../public/menu.png";
import logo from "../../public/logo.jpeg";

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function handleMenuClick() {
    setNavbarOpen((prev) => !prev);
  }

  return (
    <>
      <Menu className={navbarOpen ? "" : "hidden"} navClick={handleMenuClick} />
      <div className="flex flex-col bg-white sticky top-0 shadow z-10">
        <nav className="flex justify-between items-center my-4 mx-6">
          <button onClick={handleMenuClick} className="w-4 h-4 relative">
            <Image src={menu} alt="Manu" layout="fill" objectFit="contain" />
          </button>
          <Link href="/" passHref>
            <button className="h-10 w-10 relative">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </button>
          </Link>
        </nav>
        <div className="flex items-center border-solid border border-gray-200 rounded-full mx-4 mb-4">
          <Magnifier className="text-gray-400 ml-1" />
          <input
            className="text-sm leading-6"
            type="text"
            placeholder="  Buscar un producto"
          />
        </div>
        <h1 className="text-center mb-6">
          El verdadero mercado libre, sin comsiones
        </h1>
      </div>
    </>
  );
};

export default Navbar;
