"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { Avatar } from "keep-react";
import { ProyectosComponentsCarousel } from "../utilities/caruosel";
export const ProyectosComponents = () => {
  return (
    <div className="text-white ">
      <div className="min-h-screen text-white p-10 lg:p-20">
        <ProyectosComponentsCarousel />
      </div>
    </div>
  );
};
