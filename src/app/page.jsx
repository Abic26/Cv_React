"use client";
import React from "react";
import "./globals.css";
import { NavbarComponent } from "./components/utilities/navbar";
import { HomeComponent } from "./components/sections/home";
import { SobreMiComponent } from "./components/sections/sobreMi";
import { ExperienciaComponent } from "./components/sections/experiencia";
import { ProyectosComponents } from "./components/sections/proyectos";
import { ProyectosWpComponents } from "./components/sections/proyectoswp";

import "@/app/pages/_apps";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-x-auto">
        <NavbarComponent />
        <div className="flex flex-col justify-center items-center">
          <HomeComponent />
          <SobreMiComponent />
          <ExperienciaComponent />
          {/* <ProyectosWpComponents /> */}
          <ProyectosComponents />

        </div>
        <div className="flex justify-center pt-10">
          <span className="text-white text-center">
            Copyright © 2024 AbicDev, Todos los derechos Reservados.
          </span>
        </div>
      </div>
    </div>
  );
}
