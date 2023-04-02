import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar border-b-2 border-red-400">
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-sans cursor-pointer text[18px] ${
              index === navLinks.length - 1 ? "ml-0" : "ml-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-start items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-36 left-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar `}
        >
          <ul className="list-none sm:flex flex-col justify-start items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-sans cursor-pointer text[16px] ${
                  index === navLinks.length - 1 ? "ml-0" : "mb-6"
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={logo} alt="Jaryaneh dade" className="w-[124px] h-[32px]" />
    </nav>
  );
};
export default Navbar;
