import { CiVolumeMute } from "react-icons/ci";
function Volume() {
  return (
    <div>
      <div className="flex flex-row items-center hover:text-[#1db954] ">
        <CiVolumeMute className="text-[#b3b3b3]" />
        <div className="w-[93px] h-[3px] bg-[#b3b3b3] hover:bg-[#1db954]"></div>
      </div>
    </div>
  );
}

export default Volume;
