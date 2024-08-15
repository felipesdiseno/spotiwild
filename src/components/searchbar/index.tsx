import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
function SearchBar() {
  return (
    <div className="bg-[#121212] p-4 rounded-lg  m-2 flex flex-col space-y-4">
      <div className="inline-flex flex-row items-center w-auto text-[#b3b3b3]  cursor-pointer hover:text-white transition duration-700  ease-in-out">
        <GrHomeRounded className="w-[24px] h-[24px] " />
        <h1 className="ml-4">Inicio</h1>
      </div>
      <div className="inline-flex flex-row items-center w-auto text-[#b3b3b3] cursor-pointer hover:text-white transition duration-700  ease-in-out  ">
        <IoSearch className="w-[24px] h-[24px] " />
        <h1 className=" ml-4">Buscar</h1>
      </div>
    </div>
  );
}

export default SearchBar;
