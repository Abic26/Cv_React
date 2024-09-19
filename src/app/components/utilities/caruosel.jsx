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
          img="./proyectos/todo.png"
          alt="Proyecto 1"
        />
      ),
      title: "Mis Repositorio",
      text: "Aquí puedes acceder a mi repositorio de GitHub, donde encontrarás una variedad de proyectos desarrollados, incluyendo desafíos profesionales y personales.",
      github: (
        <a href="https://github.com/Abic26" target="_blank">
          <FaGithub size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded"
          className="w-60 h-60"
          img="./proyectos/Monograph.png"
          alt="Proyecto 1"
        />
      ),
      title: "Monograph Dashboard (full stack)",
      text: "Reto de Frontend Mentor donde los usuarios pueden ver y gestionar datos de la API randomuser.me. Al hacer clic en Tabla Backend, se pueden crear y guardar usuarios en una base de datos MySQL para visualizar cambios en tiempo real. Se usó Vue.js en el frontend, PHP/Laravel en el backend y MySQL para eficiencia y seguridad, superando el desafío original.",
      github: (
        <a
          href="https://github.com/Abic26/Front_End_Monograph_Dashboard"
          target="_blank"
        >
          <FaGithub size={30} />
        </a>
      ),
      chrome: (
        <a href="https://prueba-tecnica-eglobal.vercel.app/#/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded"
          className="w-60 h-60"
          img="./proyectos/ToDoAbic.png"
          alt="Proyecto 1"
        />
      ),
      title: "ToDO Pwa",
      text: "To Do Pwa es un proyecto que cree con el fin de aplicar mis conocimientos con Vue, a su vez el manejo de el prepocesador materialize y sus estilos convinado con css, estilizando los componentes de vue, se utilizo firebase para gestionar inicio de sesión, registro, informacion de To Do para que cada usuario la pueda gestionar por medio del CRUD para el manejo de los datos",
      github: (
        <a href="https://github.com/Abic26/ToDoAbic" target="_blank">
          <FaGithub size={30} />
        </a>
      ),
      chrome: (
        <a href="https://crud-vue-2defe.web.app/login" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded"
          className="w-60 h-60"
          img="./proyectos/inventario.png"
          alt="Proyecto 1"
        />
      ),
      title: "Sistema Facturación Vue.js",
      text: "Desarrollé un sistema de facturación para una empresa de alquiler de trajes usando Vue.js. Permite registrar facturas con detalles como estado (entregado o no), urgencia, fecha de entrega y fotos de los trajes. Facilita la búsqueda y seguimiento del estado de las facturas para los empleados.",
      github: (
        <a
          href="https://github.com/Abic26/Sistema_Inventario_Beta_V.3.0"
          target="_blank"
        >
          <FaGithub size={30} />
        </a>
      ),
      chrome: (
        <a href="https://shiny-biscochitos-df4c6c.netlify.app/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded"
          className="w-60 h-60"
          img="./proyectos/gifs_page.png"
          alt="Proyecto 1"
        />
      ),
      title: "Generador de Gifs Pwa",
      text: "Aplicacion web progresiva (PWA) realizada en vue para generar y buscar gif, consumo de api externa para generar los gifs y stickers, se puede instalar como una aplicación nativa",
      github: (
        <a
          href="https://github.com/Abic26/Gifs_And_Stickers_Page"
          target="_blank"
        >
          <FaGithub size={30} />
        </a>
      ),
      chrome: (
        <a href="https://adorable-faun-1a98b6.netlify.app/" target="_blank">
          <FaChrome size={30} />
        </a>
      ),
    },
    {
      icon: (
        <Avatar
          shape="rounded"
          className="w-60 h-60"
          img="./proyectos/pag.png"
          alt="Proyecto 1"
        />
      ),
      title: "Pagina web Boutique InStyle",
      text: "Mi proyecto de pagina web aplicada a una Pyme real de colombia, la cual les ayuda a los clientes interactuar por medio de uas funciones que se le dieron a la pagina por medio de JavaScript, como enviar mensaje por whatsapp o ir a la ubicacion de la Boutique.",
      github: (
        <a href="https://github.com/Abic26/Bou_in_Style_Page" target="_blank">
          <FaGithub size={30} />
        </a>
      ),
      chrome: (
        <a href="https://abic26.github.io/Bou_in_Style_Page/" target="_blank">
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
    <div>
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
