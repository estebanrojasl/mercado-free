import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Menu from "../Menu/Menu";
import Magnifier from "../Magnifier/Magnifier";

import menu from "../../public/menu.png";
import logo from "../../public/logo.jpeg";

type Input = {
  search: string;
};

interface NavbarProps {
  onSearch: Function;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const { register, handleSubmit, setFocus } = useForm<Input>();;

  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleMenuClick() {
    setNavbarOpen((prev) => !prev);
  }

  const searchSubmit: SubmitHandler<Input> = async ({ search }) => {
    onSearch(search);
  };
  
  const router = useRouter();
  const path = router.asPath;
  let pathVender = false;
  if (path === "/vender") {
    pathVender = true;
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
        <div
          className={`${
            pathVender ? "hidden" : ""
          } flex items-center border-solid border border-gray-200 rounded-full mx-4 mb-4`}
        >
          <Magnifier className="text-gray-400 ml-1" />
          <form
            className="flex justify-between w-full mr-2"
            onSubmit={handleSubmit(searchSubmit)}
          >
            <input
              className="text-sm leading-6 ml-2 outline-none mr-4 w-full"
              id="search"
              type="text"
              placeholder="Buscar un producto"
              {...register("search")}
            />
            <button
              className="text-sm"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
        <h1 className="text-center mb-6">
          El verdadero mercado libre, sin comsiones
        </h1>
      </div>
    </>
  );
};

export default Navbar;
