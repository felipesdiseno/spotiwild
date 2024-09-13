import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
function User() {
  return (
    <div className=" ml-4 w-12 h-12 bg-[#1f1f1f] rounded-full flex items-center justify-center cursor-pointer transform hover:scale-105">
      <FaRegCircleUser className="w-8 h-8 text-[#9b9b9b]" />
    </div>
  );
}

export default User;
