"use client";
import { LuPlusCircle } from "react-icons/lu";
import { IoPlayCircleSharp } from "react-icons/io5";
import { FaPauseCircle } from "react-icons/fa";
import { GiNextButton } from "react-icons/gi";
import { GiPreviousButton } from "react-icons/gi";
import { LiaRandomSolid } from "react-icons/lia";
import { BiRepeat } from "react-icons/bi";
import { TbMicrophone2 } from "react-icons/tb";
import { ImPlay3 } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaExpandAlt } from "react-icons/fa";
import Volume from "../Volume";
import { useState } from "react";
import ListenNow from "./VolumeBar";
function RepBar() {
  const [play, setPlay] = useState(false);
  const handleIconClick = () => {
    setPlay(!play);
  };
  return (
    <div className=" fixed bottom-0 left-0 right-0 w-full flex justify-between items-center px-4 py-2 space-x-2 ">
      <div className=" flex space-x-4 items-center">
        <div className="w-[56px] h-[56px] bg-blue-500 items-center justify-center rounded-sm p-2">
          imagen
        </div>
        <div className="flex flex-col">
          <h1 className="text-white">nombre cancion</h1>
          <h1 className="text-gray-200">artista</h1>
        </div>
        <LuPlusCircle className=" cursor-pointer w-4 h-4 hover:text-white transform hover:scale-125 " />
      </div>
      {/* controles de rep */}
      <div className="flex flex-row items-center space-x-4">
        <LiaRandomSolid className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <GiPreviousButton className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <div
          onClick={handleIconClick}
          className=" cursor-pointer w-8 h-8 transform hover:scale-125 flex items-center justify-center"
        >
          {play ? <IoPlayCircleSharp /> : <FaPauseCircle />}
        </div>

        <GiNextButton className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <BiRepeat className="w-5 h-5 cursor-pointer hover:text-white transform  rotate-180 hover:scale-125" />
      </div>
      {/* opciones adicionales */}
      <div className="flex items-center space-x-4">
        <ListenNow />

        <TbMicrophone2 className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <TiThMenuOutline className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <Volume />
        <MdCheckBoxOutlineBlank className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <FaExpandAlt className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
      </div>
    </div>
  );
}

export default RepBar;
