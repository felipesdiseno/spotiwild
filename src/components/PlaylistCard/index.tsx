import React from "react";
import dataPlaylist from "../../../public/data/Playlist";

function PlayListComponent({ playList }: { playList: any }) {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-2 w-12 h-12 rounded-md">
        <img
          src={playList.image}
          alt="Image 2"
          className="w-full h-full object-cover rounded-tl-md"
        />
        <img
          src={playList.image2}
          alt="Image 2"
          className="w-full h-full object-cover rounded-tr-md "
        />
        <img
          src={playList.image3}
          alt="Image 3"
          className="w-full h-full object-cover rounded-bl-md "
        />
        <img
          src={playList.image4}
          alt="Image 4"
          className="w-full h-full object-cover  rounded-br-md"
        />
      </div>
      <div className="ml-4 ">
        <h1>{playList.name}</h1>
        <div className="flex flex-row">
          <h2 className="mr-1">{playList.playlist}</h2>
          <h1>.</h1>
          <h2 className="ml-1">{playList.author}</h2>
        </div>
      </div>
    </div>
  );
}

export default PlayListComponent;
