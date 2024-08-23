"use client";

import { CiVolumeMute, CiVolumeHigh } from "react-icons/ci";
import { useState, useRef } from "react";

function Volume() {
  const [mute, setMute] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const volumeBarRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMute = () => {
    setMute(!mute);
  };

  const handleMouseEnter = () => {
    setShowSlider(true);
  };

  const handleMouseLeave = () => {
    setShowSlider(false);
  };

  const handleBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // No hacer nada cuando se hace click en la barra
  };

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = volumeBarRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = event.clientX - rect.left;
      const newPosition = Math.max(0, Math.min(offsetX, rect.width));
      setSliderPosition(newPosition);
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (showSlider && volumeBarRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const newPosition = Math.max(0, Math.min(offsetX, rect.width));
      setSliderPosition(newPosition);
    }
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevenir comportamiento de arrastrar
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    // Actualizar posición del slider cuando se hace click
    const rect = volumeBarRef.current?.getBoundingClientRect();
    if (rect) {
      const offsetX = event.clientX - rect.left;
      const newPosition = Math.max(0, Math.min(offsetX, rect.width));
      setSliderPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative">
      <div
        onClick={handleMute}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-row items-center cursor-pointer text-[#9d9d9d] hover:text-white space-x-2"
      >
        {!mute ? (
          <CiVolumeHigh className="w-[16px] h-[16px]" />
        ) : (
          <CiVolumeMute className="text-[#b3b3b3] w-[16px] h-[16px]" />
        )}
        <div
          ref={volumeBarRef}
          onClick={handleBarClick}
          className="relative w-[93px] h-[3px] bg-[#b3b3b3]"
        >
          {/* Barra de volumen */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#1db954] opacity-0 hover:opacity-50 transition-opacity" />
          {showSlider && (
            <div
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onClick={handleSliderClick}
              className="absolute top-[-8px] w-4 h-4 bg-[#1db954] rounded-full"
              style={{
                left: sliderPosition - 8, // Centrar el slider
                top: "50%", // Centrar verticalmente relativo a la barra
                transform: "translateY(-50%)", // Ajustar centrado vertical
                transition: "left 0.1s ease-in-out",
                cursor: "pointer",
                zIndex: 1, // Asegurarse de que esté por encima del efecto de hover
                pointerEvents: "auto", // Permitir que reciba eventos de mouse
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Volume;
