import React from "react";
import { AiFillSpotify } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiArchiveStackLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";

function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between m-2">
      <AiFillSpotify className="w-8 h-8 ml-4 cursor-pointer" />
      <div className="flex flex-row ">
        <div className="bg-[#1f1f1f] p-2 rounded-full flex items-center justify-center space-x-2 h-12 w-12 transform hover:scale-105 mr-2 ">
          <GoHome className="text-[#9b9b9b] h-6 w-6 " />
        </div>
        <div className="bg-[#1f1f1f] p-2 rounded-full flex flex-row items-center justify-center cursor-pointer h-12 border border-transparent hover:border hover:border-[#9b9b9b] ">
          <div>
            <CiSearch className="w-5 h-5 text-[#9b9b9b]" />
          </div>
          <input
            type="text"
            placeholder="¿Qué quieres reproducir? "
            className="ml-2 bg-[#1f1f1f] text-[#9b9b9b]"
            name="search"
          />
          <RiArchiveStackLine className="text-[#9b9b9b] w-5 h-5 ml-2" />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <IoArrowDownCircleOutline />
        <h1 className="ml-4">Instalar aplicación</h1>
        <div>
          <GoBell />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
