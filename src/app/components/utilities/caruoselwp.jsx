"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { Avatar } from "keep-react";
import { Carousel } from "primereact/carousel";
export const ProyectosComponentsCarousel = () => {
  const data = [
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/elite.png"
          alt="Proyecto 1"
        />
      ),
      title: "Elite Chicago Spa",
      github: (
        <a href="https://elitechicagospa.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/quick.png"
          alt="Proyecto 1"
        />
      ),
      title: "Qucik Cleaning Chicago",
      github: (
        <a href="https://quickcleanchicago.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/batinachicago.png"
          alt="Proyecto 1"
        />
      ),
      title: "Botanica Indio Amazonico",
      github: (
        <a href="https://botanicaindioamazonico.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/botanicaamor.png"
          alt="Proyecto 1"
        />
      ),
      title: "Botanica Del Amor",
      github: (
        <a href="https://botanicadelamor.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/santeria.png"
          alt="Proyecto 1"
        />
      ),
      title: "Santeria Maestros Espirituales",
      github: (
        <a href="https://maestrosespirituales.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/secreto.png"
          alt="Proyecto 1"
        />
      ),
      title: "Botanica Secreto Azteca",
      github: (
        <a href="https://elsecretoazteca.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded "
          className="w-60 h-60"
          img="./proyectos/virgen.png"
          alt="Proyecto 1"
        />
      ),
      title: "Botanica Virgen Morena",
      github: (
        <a href="https://botanicavirgenmorena.com/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },

    // Agrega más objetos según sea necesario
  ];

  const templateData = (project) => {
    return (
      <div
        id="proyectos"
        className="flex flex-col items-center justify-center p-4 border-1 surface-border border-round my-2 text-center gap-10   flex-wrap"
      >
        <div className=" flex items-center mb-4 justify-center">
          {project.icon}
        </div>
        <div className="flex flex-col mb-4 gap-4 items-center">
          <h1 className="text-xl lg:text-2xl font-bold hover:text-red-200 cursor-default">
            {project.title}
          </h1>
          <div className="w-96">
            <p className="flex flex-wrap opacity-70">{project.text}</p>
          </div>
          <div className="flex justify-center gap-10 mt-4">
            <div className="hover:text-red-200">{project.github}</div>
            <div className="hover:text-red-200">{project.chrome}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <h3 className=" text-start text-3xl lg:text-4xl font-bold pt-16 hover:text-red-200 hover:cursor-default">
        Proyectos Wordpress
      </h3>
      <br /><br />
      <span className=" opacity-55 w-auto">
        He trabajado en diversos proyectos de WordPress, enfocándome en la
        mejora de la UI y UX, así como en la implementación de diseño
        responsive. Utilizando el plugin Elementor y código personalizado, he
        creado sitios web dinámicos y altamente personalizables. Estos proyectos
        fueron desarrollados en la empresa Azteca
        Internacional:
      </span>
      <br /><br />
      <Carousel
        value={data}
        itemTemplate={templateData}
        numVisible={2}
        numScroll={2}
        className="max-w-screen-xl mx-auto"
      />
    </div>
  );
};
