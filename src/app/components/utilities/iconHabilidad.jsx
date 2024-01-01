// "use client";
import React from "react";

export const IconComponent = ({ children, name }) => {
  return (
    <div className="flex flex-col items-star text-white hover:text-red-300 opacity-55 hover:opacity-100
    ">
      <div className="cursor-pointer flex justify-center ">
        {children} 
      </div>
      <p className="cursor-pointer text-xs lg:text-sm mb-7 text-center">{name}</p> 
    </div>
  );
};