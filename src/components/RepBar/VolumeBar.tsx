"use client";
import { ImPlay3 } from "react-icons/im";
import { useState } from "react";

function ListenNow() {
  const [play, setPlay] = useState(false);
  const handleIconClick = () => {
    setPlay(!play);
  };

  return (
    <div onClick={handleIconClick}>
      {play ? (
        <div
          style={{ borderColor: "#858585" }}
          className="border w-[14px] h-[16px] flex items-center justify-center rounded-sm"
        >
          <ImPlay3 className="text-[#858585]" />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div
            style={{ borderColor: "#1db954" }}
            className="border w-[14px] h-[16px] flex items-center justify-center rounded-sm"
          >
            <ImPlay3 className="text-[#1db954]" />
          </div>
          <h1
            style={{ marginTop: "0.2px" }}
            className="text-[#1db954] font-bold"
          >
            .
          </h1>{" "}
        </div>
      )}
    </div>
  );
}

export default ListenNow;
