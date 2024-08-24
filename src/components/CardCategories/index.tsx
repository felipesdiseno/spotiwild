import React from "react";

function getRandomColor() {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-orange-500",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
function Card(props: any) {
  const randomColor = getRandomColor();
  return (
    <div
      className={`${randomColor} w-[300px] h-[170px] rounded-lg p-4 flex items-center justify-between relative overflow-hidden hover:bg-opacity-90 transition duration-300 ease-in-out cursor-pointer`}
    >
      <h2 className="text-white text-xl font-bold z-10 translate-y-[-15px]">
        {props.name}
      </h2>
      <img
        src={props.image}
        alt={props.name}
        className="absolute right-0 bottom-0 w-24 h-24 transform rotate-12 translate-x-4 translate-y-[-6px] shadow-lg rounded-md"
      />
    </div>
  );
}

export default Card;
