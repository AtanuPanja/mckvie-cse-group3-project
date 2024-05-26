"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  let sticky =
    "w-full flex md:justify-center justify-between items-center p-4 fixed z-20";
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={offset < 20 ? `${sticky}` : `${sticky} gradient-bg-nav`}>
      <div className="md:flex-[0.5] flex items-center">
        <img
          src="./images/logo.png"
          alt="logo"
          className="w-10 h-15 cursor-pointer"
        />
        <h1 className="ml-3 font-extrabold text-2xl">
          Spy <span className="font-medium text-gray-300">Chain</span>
        </h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About", "Contact"].map((item, index) => (
          <Link
            href={index === 0 ? `/` : `/${item.toLowerCase()}`}
            key={item + index}
          >
            <NavBarItem title={item} />
          </Link>
        ))}
        <li className="flex items-center bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          <Link href={"/dapp"}>Get Started</Link>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <svg
            onClick={() => setToggleMenu(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(225,225,225, 1)", transform: "msFilter" }}
            className="text-white md:hidden cursor-pointer"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        )}
        {toggleMenu && (
          <svg
            onClick={() => setToggleMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(225,225,225, 1)", transform: "msFilter" }}
            className="text-white md:hidden cursor-pointer"
          >
            <path d="M19.95 5.64 13.59 12l6.36 6.36 1.41-1.41L16.41 12l4.95-4.95-1.41-1.41zM2.64 7.05 7.59 12l-4.95 4.95 1.41 1.41L10.41 12 4.05 5.64 2.64 7.05z"></path>
          </svg>
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <svg
                onClick={() => setToggleMenu(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "rgba(225,225,225, 1)", transform: "msFilter" }}
                className="text-white md:hidden cursor-pointer"
              >
                <path d="M19.95 5.64 13.59 12l6.36 6.36 1.41-1.41L16.41 12l4.95-4.95-1.41-1.41zM2.64 7.05 7.59 12l-4.95 4.95 1.41 1.41L10.41 12 4.05 5.64 2.64 7.05z"></path>
              </svg>
            </li>
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              // <NavBarItem
              //   key={item + index}
              //   title={item}
              //   classprops="my-2 text-lg w-2/4"
              // />
              <li className={`mx-4 cursor-pointer my-2 text-lg w-2/4`}>
                <Link href={index === 0 ? `/` : `/${item.toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
