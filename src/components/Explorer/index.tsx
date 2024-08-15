import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { GoBell } from "react-icons/go";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import ListRep from "../ListRep";
function Explorer() {
  return (
    <div className="bg-[#101010] p-4 rounded-lg">
      <div className="justify-between">
        <div className=" flex flex-row space-x-4 ">
          <div className="bg-[#131313] rounded-full">
            <GrPrevious className="text-[#999999]" />
          </div>
          <div className="bg-[#131313] rounded-full">
            <GrNext className="text-[#999999]" />
          </div>
          <div className="flex flex-row items-center space-x-2">
            <IoArrowDownCircleOutline />
            <h1 className="ml-4">Instalar aplicación</h1>
            <div>
              <GoBell />
            </div>
          </div>
        </div>
      </div>
      <ListRep />
    </div>
  );
}

export default Explorer;
