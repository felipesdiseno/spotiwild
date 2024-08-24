import React from "react";
import dataPlaylist from "../../../public/data/Playlist";
import PlayListComponent from "@/components/PlaylistCard";
function PlaylistShow() {
  return (
    <div className="space-y-2">
      {dataPlaylist.map((playlist, index) => (
        <PlayListComponent key={index} playList={playlist} />
      ))}
    </div>
  );
}

export default PlaylistShow;
