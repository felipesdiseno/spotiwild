import SearchBar from "@/components/searchbar";
import SideBar from "@/components/Sidebar";
import Image from "next/image";
import Explorer from "@/components/Explorer";
import RepBar from "@/components/RepBar";

export default function Home() {
  return (
    <div>
      <div className="bg-black flex flex-row space-x-2 space-y-2">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="flex-1">
          <Explorer />
        </div>
        {/* centro */}
        <div></div> {/* derecha */}
      </div>
      <RepBar />
    </div>
  );
}
