import React from "react";
import Navbar from "./Navbar.jsx";

import karn from "../images/Karnani.png";
import hom from "../images/building.jpg";
import { Link } from "react-router-dom";
import birmi from "../images/birmingham.jpg";
import coven from "../images/coventry.jpg";
import leice from "../images/leicester.jpg";
import london from "../images/london.jpg";
import notting from "../images/nottingham.jpg";
import sheff from "../images/sheffield.jpg";
import manches from "../images/manchester.jpg";

const Home = () => {
  return (
    <>
      <div className="w-full max-w-full h-full relative ">
        <div className="w-full h-full flex absolute bg-black overflow-x-hidden">
          <img
            className=" w-full h-full opacity-40 object-cover"
            src={hom}
            alt=""
          />
        </div>
        <Navbar />

        <section className="relative z-10 mt-6 py-10 ">
          <h1 className="text-white flex items-center justify-center text-center text-5xl md:text-7xl lg:text-7xl font-bold">
            Let's Plan Your Next Move{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-40 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </h1>
          <h3 className="text-white mt-8 text-center text-xl">
            Explore our range of beautiful properties curated for you !
          </h3>

          <div className="text-center">
            <Link
              to={"/property"}
              className="inline-flex text-white mt-8 text-center"
            >
              <span className="bg-blue-700 py-3 px-7 text-2xl font-bold rounded-2xl transition-transform transform hover:translate-y-[-8px]">
                Explore Us
              </span>
            </Link>
          </div>
        </section>
      </div>

      <section className="mt-6 p-4">
        <div>
          <h2 className="text-center text-2xl font-bold">SPECIAL OFFERS</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 gap-4">
          <div className="bg-green-500 flex rounded-2xl px-6 py-4 items-center gap-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg">Karnani Exclusive Offer</h2>
              <p className="text-xs">
                Book through us and get £50 as cashback*
              </p>
            </div>
          </div>

          <div className="bg-green-500 flex rounded-2xl px-6 py-4 items-center gap-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg">£100 Amazon Voucher</h2>
              <p className="text-xs">
                For every person who books through your referral, you get a £100
                Amazon gift voucher*
              </p>
            </div>
          </div>
        </div>

        <div className="py-30 px-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-40 mx-10 ">
          <div className="flex flex-col items-center justify-center px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mt-2">10,000+ Beds</h2>
            <p className="text-gray-500  mt-2">
              Choose from an extensive range of options and book the one that
              suits you the best.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mt-2">500 + Universities</h2>
            <p className="text-gray-500 px-2 mt-2">
              Explore the top student and professional housing options close to
              city centre and prestigious universities.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mt-2">50 + Cities</h2>
            <p className="text-gray-500 px-2 mt-2">
              We serve many big cities all across the UK and Australia.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 px-20">
        <h1 className="text-blue-900 text-4xl text-center font-bold mb-10">
          TOP CITIES TO COVER
        </h1>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-4">
            <div className="h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={birmi}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  Birmingham
                </button>
              </div>
            </div>
            <div className=" h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={london}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  London
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
            <div className="h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={coven}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  Coventry
                </button>
              </div>
            </div>
            <div className=" h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={notting}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  Nottingham
                </button>
              </div>
            </div>
            <div className=" h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={leice}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  Leicester
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-4">
            <div className="h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={birmi}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  Birmingham
                </button>
              </div>
            </div>
            <div className=" h-full">
              <div className="h-80 relative transition-transform transform hover:translate-y-[-8px] cursor-pointer">
                <img
                  className="rounded-2xl aspect-square h-full w-full object-cover"
                  src={london}
                  alt=""
                />
                <button className="absolute bg-black bottom-2 left-2 text-white px-4 py-2 opacity-80 rounded-2xl">
                  London
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex mt-8 mb-20 justify-center items-center ">
        <Link
          to={"/property"}
          className=" text-white mt-8 transition-transform transform hover:translate-y-[-8px] cursor-pointer "
        >
          <span className="bg-blue-700 text-center py-3 px-10 text-2xl font-bold rounded-2xl ">
            Explore More
          </span>
        </Link>
      </div>

      <div className="mt-8 bg-gray-100 px-7  pb-10 ">
        <h1 className="font-bold text-5xl text-center py-20 ">
          Giving You Peace of Mind
        </h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <div className="px-4">
            <h1 className="font-bold text-xl">Prime Locations</h1>
            <p className="text-gray-600 mt-2">
              Our accommodations are strategically positioned across the areas,
              placing you within a reach of local attractions, vibrant city
              life, and convenient transportation links. Enjoy the best of each
              area without compromising on accessibility.
            </p>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-xl">Tailored Experiences</h1>
            <p className="text-gray-600 mt-2">
              Find the perfect room that suits your needs, whether it's a cozy
              single space or a spacious en-suite. Our diverse range of
              accommodation ensures comfort tailored to your preferences.
            </p>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-xl">Tailored Experiences</h1>
            <p className="text-gray-600 mt-2">
              Find the perfect room that suits your needs, whether it's a cozy
              single space or a spacious en-suite. Our diverse range of
              accommodation ensures comfort tailored to your preferences.
            </p>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-xl">Impeccable Service</h1>
            <p className="text-gray-600 mt-2">
              Our attentive staff and proprty manager is available, ready to
              assist you with personalized recommendations and ensuring a
              seamless and enjoyable stay from check-in to departure.
            </p>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-xl">Safety & Security</h1>
            <p className="text-gray-600 mt-2">
              Rest assured with our commitment to your safety. Our
              accommodations feature modern security systems, including CCTV
              surveillance, and strict adherence to safety protocols for your
              peace of mind.
            </p>
          </div>
          <div className="px-4">
            <h1 className="font-bold text-xl">Affordable Luxury</h1>
            <p className="text-gray-600 mt-2">
              Experience the perfect blend of luxury and affordability. Our
              accommodations offers premium comfort at competitive rates,
              allowing you to indulge in a delightful stay without straining
              your budget.
            </p>
          </div>
        </div>
      </div>

      <section className="px-10 py-10 pb-20">
        <div className="text-center mt-10 mb-20">
          <span className="text-green-700 font-bold bg-gray-200 px-6 py-4 rounded-2xl">
            BOOKING PROCESS
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 mt-7 px-20">
          <div className="drop flex flex-col gap-2 px-10 py-6 border shadow-xl border-gray-200 rounded-2xl md:w-40 lg:w-60 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-30 h-20"
              >
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Search and Finalise</h1>
              <p className="mt-2">
                Choose from several verified Premium housing listings.
              </p>
            </div>
          </div>

          <div className="drop flex flex-col gap-2 px-10 py-6 border shadow-xl border-gray-200 rounded-2xl md:w-40 lg:w-60 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                  clipRule="evenodd"
                />
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">Smooth Automated Paperwork</h1>
              <p className="mt-2">
                Don’t stress out on too many documents, we have your back!
              </p>
            </div>
          </div>

          <div className="drop flex flex-col gap-2 px-10 py-6 border shadow-xl border-gray-200 rounded-2xl md:w-40 lg:w-60 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-20 h-20"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">YOUR BOOKING IS CONFIRMED</h1>
              <p className="mt-2">
                Pack your bag and Let’s MOVE to your new life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 px-10 py-10 mt-10">
        <div className="text-center mt-6 mb-10">
          <span className="text-green-700 font-bold  bg-gray-100 px-8 py-4 rounded-2xl">
            NEED HELP?
          </span>

          <h1 className="font-bold text-6xl my-10 py-4 ">
            Let's have a chat ?
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  mt-20 mb-20">
          <div className="bg-white flex flex-col items-center justify-center border-2 border-red-600 rounded-2xl px-1 py-10 transition-transform transform hover:translate-y-[-8px] cursor-pointer">
            <i className="fa-brands fa-whatsapp fa-5x"></i>

            <h1 className="text-gray-600 text-xl mt-4 ">Chat on WhatsApp</h1>
          </div>

          <div className="bg-white flex flex-col items-center justify-center border-2 border-red-600 rounded-2xl px-1 py-10 transition-transform transform hover:translate-y-[-8px] cursor-pointer">
            <i className="fa-solid fa-envelope fa-5x"></i>

            <h1 className="text-gray-600 text-xl mt-4 ">Email Us</h1>
          </div>
          <div className="bg-white flex flex-col items-center justify-center border-2 border-red-600 rounded-2xl px-1 py-10 transition-transform transform hover:translate-y-[-8px] cursor-pointer">
            <i className="fa-solid fa-phone fa-5x"></i>

            <h1 className="text-gray-600 text-xl mt-4 ">+44 7895299086</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
