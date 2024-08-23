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
import ActualSong from "./ActualSong";
function RepBar() {
  const [play, setPlay] = useState(false);
  const [random, setRandom] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [mic, setMic] = useState(false);
  const [menu, setMenu] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const togglePlay = () => setPlay(!play);
  const toggleRandom = () => setRandom(!random);
  const toggleRepeat = () => setRepeat(!repeat);
  const toggleMic = () => setMic(!mic);
  const toggleMenu = () => setMenu(!menu);
  const toggleCheckbox = () => setCheckbox(!checkbox);

  return (
    <div className=" fixed bottom-0 left-0 right-0 w-full flex justify-between items-center px-4 py-2 space-x-2 ">
      <ActualSong />
      {/* controles de rep */}
      <div className="flex flex-row items-center space-x-4">
        <div
          onClick={toggleRandom}
          className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125"
          style={{ color: random ? "#1db954" : "#858585" }}
        >
          {random ? (
            <LiaRandomSolid className="w-5 h-5" />
          ) : (
            <LiaRandomSolid className="w-5 h-5" />
          )}
        </div>
        <GiPreviousButton className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <div
          onClick={togglePlay}
          className=" cursor-pointer w-8 h-8 transform hover:scale-125 flex items-center justify-center"
        >
          {play ? (
            <IoPlayCircleSharp className="w-8 h-8" />
          ) : (
            <FaPauseCircle className="w-8 h-8" />
          )}
        </div>

        <GiNextButton className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
        <div
          onClick={toggleRepeat}
          className="w-5 h-5 cursor-pointer hover:text-white transform  rotate-180 hover:scale-125"
          style={{ color: repeat ? "#1db954" : "#858585" }}
        >
          <BiRepeat className="w-5 h-5  " />
        </div>
      </div>
      {/* opciones adicionales */}
      <div className="flex items-center space-x-4">
        <ListenNow />
        <div
          onClick={toggleMic}
          className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125"
          style={{ color: mic ? "#1db954" : "#858585" }}
        >
          <TbMicrophone2 className="w-5 h-5 cursor-pointer" />
        </div>
        <div
          onClick={toggleMenu}
          className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125"
          style={{ color: menu ? "#1db954" : "#858585" }}
        >
          <TiThMenuOutline className="w-5 h-5 cursor-pointer" />
        </div>
        <Volume />
        <div
          onClick={toggleCheckbox}
          className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125"
          style={{ color: checkbox ? "#1db954" : "#858585" }}
        >
          <MdCheckBoxOutlineBlank className="w-5 h-5 cursor-pointer " />
        </div>
        <FaExpandAlt className="w-5 h-5 cursor-pointer hover:text-white transform hover:scale-125" />
      </div>
    </div>
  );
}

export default RepBar;
