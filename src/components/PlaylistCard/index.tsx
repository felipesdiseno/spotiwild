import React from "react";

function PlayListComponent() {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-2 w-12 h-12 rounded-md">
        <div className="bg-red-500">i1</div>
        <div className="bg-green-500">i2</div>
        <div className="bg-blue-500">i3</div>
        <div className="bg-yellow-500">i4</div>
      </div>
      <div className="ml-4 ">
        <h1>playlist name</h1>
        <div className="flex flex-row">
          <h2 className="mr-1">playlist</h2>
          <h1>.</h1>
          <h2 className="ml-1">author</h2>
        </div>
      </div>
    </div>
  );
}

export default PlayListComponent;
