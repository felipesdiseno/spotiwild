import { FaPlus } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { VscLibrary } from "react-icons/vsc";
import PlaylistShow from "../PlayList";
import PlayListComponent from "../PlaylistCard";
function SideBar() {
  return (
    <div className="bg-[#121212] p-4 text-[#b3b3b3]  m-2 rounded-xl">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center cursor-pointer hover:text-white transition duration-700  ease-in-out ">
          <VscLibrary className="w-5 h-5" />
          <h1 className="ml-4">Tu biblioteca</h1>
        </div>
        <div className="flex flex-row items-center  space-x-2">
          <div className="w-[32px] h-[32px] bg-none rounded-full p-2 cursor-pointer hover:text-white  hover:bg-[#2a2a2a] rounded-full transition duration-700  ease-in-out ">
            <FaPlus className="w-[16px] h-[16px] " />
          </div>
          <div className="w-[32px] h-[32px] bg-none rounded-full p-2 cursor-pointer hover:text-white  hover:bg-[#2a2a2a] rounded-full transition duration-700  ease-in-out ">
            <IoArrowForward className="w-[16px] h-[16px] " />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <div className="text-white rounded-full bg-[#2a2a2a] p-2 hover:bg-gray-400 transition-all">
          <h1 className="text-[14px]">Playlist</h1>
        </div>
        <div className="text-white rounded-full bg-[#2a2a2a] p-2">
          <h1 className="text-[14px]">Artistas</h1>
        </div>
        <div className="text-white rounded-full bg-[#2a2a2a] p-2">
          <h1 className="text-[14px]">Álbumes</h1>
        </div>
      </div>
      <div className="items-center flex- flex-row mt-4">
        <div className="items-center space-x-2 flex flex-row justify-between">
          <div className="w-[32px] h-[32px] bg-none rounded-full p-2 cursor-pointer hover:text-white  hover:bg-[#2a2a2a] rounded-full transition duration-700  ease-in-out ">
            <IoSearch className="w-[16px] h-[16px] " />
          </div>
          <div className="items-center space-x-2 inline-flex flex-row cursor-pointer hover:text-white transition duration-700  ease-in-out transform hover:scale-105 ">
            <h1 className="text-[14px]">Recientes</h1>
            <TfiMenuAlt className="w-[16px] h-[16px] " />
          </div>
        </div>
        <PlaylistShow />
      </div>
    </div>
  );
}

export default SideBar;
