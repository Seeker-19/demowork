import React from "react";
import karn from "../images/Karnani.png";
import { useState } from "react";
import { Link } from "react-router-dom";





const Navbar = () => {

    const[isVisible,setIsVisible]=useState(false);

    const toggle=()=>{

        setIsVisible(!isVisible);

    }
  return (
    <>
      <nav className=" z-10 relative flex justify-between w-full px-20 pb-10 ">
        <div className="flex items-center h-40 w-40">
          <img className="object-cover" src={karn} alt="" />
        </div>
        <div
          className={`flex ${
            isVisible ? "" : "hidden"
          } flex-col position-fixed text-white bg-white gap-4 px-2 py-6 mt-6 rounded-2xl border-gray-300 border-2 mb-4 `}
        >
          <Link
            to={"/"}
            className="bg-blue-400 cursor-pointer text-xl px-10 py-2 rounded-2xl"
          >
            Home
          </Link>
          <Link
            to={"/property"}
            className="bg-blue-400 cursor-pointer text-xl px-10 py-2 rounded-2xl"
          >
            Property
          </Link>
        </div>

        <ul className="hidden mt-0 md:flex items-center text-white gap-16 ">
          <li className="px-4 py-3 bg-blue-500 text-white font-bold rounded-2xl">
            Get in touch !
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </li>
        </ul>
        <div className="bar flex sm:flex lg:hidden md:hidden justify-center items-center text-white">
          <div onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
