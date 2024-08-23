"use client";
import { LuPlusCircle } from "react-icons/lu";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

function ActualSong() {
  const [check, setCheck] = useState(false);
  const toggleCheck = () => setCheck(!check);
  return (
    <div className=" flex space-x-4 items-center">
      <div className="w-[56px] h-[56px] bg-blue-500 items-center justify-center rounded-sm p-2">
        imagen
      </div>
      <div className="flex flex-col">
        <h1 className="text-white">nombre cancion</h1>
        <h1 className="text-gray-200">artista</h1>
      </div>
      <div onClick={toggleCheck} className="">
        {!check ? (
          <LuPlusCircle className=" cursor-pointer w-4 h-4 hover:text-white transform hover:scale-125 " />
        ) : (
          <FaCircleCheck className="text-[#1db954]" />
        )}
      </div>
    </div>
  );
}

export default ActualSong;
