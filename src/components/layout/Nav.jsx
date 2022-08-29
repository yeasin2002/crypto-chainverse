import React from "react";
import { NavLink, Link } from "react-router-dom";

import CryptoLogo from "../../assets/images/cryptoLogo.svg";

const Nav = () => {
  return (
    <div>
      <nav className="bg-slate-900  shadow ">
        <div className=" px-6 py-4 mx-auto flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <p className="text-2xl w-10 font-bold bg-gray-200 rounded-full transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-200 dark:hover:text-gray-300">
                <img className="w-10" src={CryptoLogo} alt="logo" />
              </p>
            </Link>
          </div>

          <div className=" md:flex">
            <div className="flex  md:flex-row md:mx-6 gap-x-2">
              <NavLink
                to={"/"}
                className="my-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </NavLink>

              <NavLink
                to={"/crypto"}
                className="my-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                CryptoCurrencies
              </NavLink>
              <NavLink
                to={"news"}
                className="my-1 text-sm font-medium text-gray-200 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                News
              </NavLink>
            </div>

            {/* <div className="flex justify-center md:block">
                    <a className="relative text-gray-200 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
                    </a>
                </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
