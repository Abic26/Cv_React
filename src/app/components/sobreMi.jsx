import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IconComponent } from "./utilities/iconHabilidad";
import { ToastComponent } from "./utilities/toast";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoVue } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const SobreMiComponent = () => {
  return (
    <div className="min-h-screen text-white p-10 lg:p-20">
      <div className="flex flex-col pt-54 lg:flex-row justify-between gap-14 lg:gap-24">
        {/* Sección sobre mí */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">SOBRE MÍ</h2>
          <p className="text-sm lg:text-base opacity-55">
            Como desarrollador web front-end apasionado y ambicioso, tengo un
            enfoque nítido en las tecnologías más actuales, me especializo en
            crear interfaces de usuario dinámicas y visualmente atractivas. Mi
            experiencia abarca HTML, CSS, JavaScript, Vue, React, y marcos de
            diseño modernos como Bootstrap y Tailwind CSS. También poseo
            habilidades avanzadas en control de versiones con Git y GitHub,
            facilitando la colaboración efectiva en equipo.
          </p>
          <br />
          <p className="text-sm lg:text-base opacity-55">
            Mi enfoque en JavaScript y Python me ha permitido desarrollar
            soluciones innovadoras, superando consistentemente las expectativas
            de los clientes. Mi compromiso con el aprendizaje constante y la
            adaptación a las tendencias emergentes del desarrollo front-end me
            convierte en un candidato ideal para equipos que buscan impulsar la
            frontera del diseño web. Mi objetivo es aportar mi creatividad y
            competencia técnica para generar un impacto significativo en cada
            proyecto.
          </p>
        </div>

        {/* Sección de habilidades */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-1">HABILIDADES</h2>
          <span className="opacity-30">haz click en el icono</span>
          <div className="grid grid-cols-3 mt-6">
            <ToastComponent
              severity=""
              summary="HTML"
              detail="Como Front-End Junior, creo estructuras web con HTML y aplico estilos visuales con CSS. Mi objetivo es hacer que el sitio web sea atractivo, funcional y fácil de usar para los usuarios, colaborando con diseñadores y mejorando la experiencia con interacciones en JavaScript."
            >
              <IconComponent name={"HTML"}>
                <FaHtml5 size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="CSS"
              detail={
                "Como Front-End Junior, aplico CSS para estilizar y mejorar el aspecto visual de las páginas web. Trabajo junto a diseñadores y equipos de UX/UI para implementar diseños en código CSS, asegurando coherencia visual, legibilidad y accesibilidad en el sitio web."
              }
            >
              <IconComponent name={"CSS"}>
                <FaCss3Alt size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent severity="" summary="PYTHON" detail={""}>
              <IconComponent name={"PYTHON"}>
                <FaPython size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="JAVASCRIPT"
              detail={
                "Como Front-End Junior, me encargo de la validación de datos en el lado del cliente, asegurándome de que los datos ingresados por los usuarios cumplan con los requisitos especificados. Utilizo JavaScript para verificar y validar los campos de entrada antes de enviar los datos al servidor, ademas de poder almacenar informacion en base de datos locales y externas, consultandolas por medio de metodos de JS"
              }
            >
              <IconComponent name={"JAVASCRIPT"}>
                <IoLogoJavascript size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="VUE"
              detail={
                "Como Front-End Junior, aplico Vue.js para crear interfaces de usuario interactivas y dinámicas. Utilizo Vue.js para mejorar la experiencia del usuario, manejar datos en tiempo real, y facilitar la actualización y renderizado de elementos en la página web de manera eficiente. Con Vue.js, puedo reutilizar componentes, implementar reactividad en la interfaz y trabajar en colaboración con el Back-End para desarrollar aplicaciones web modernas y de alto rendimiento."
              }
            >
              <IconComponent name={"VUE"}>
                <IoLogoVue size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent severity="" summary="REACT" detail={""}>
              <IconComponent name={"REACT"}>
                <FaReact size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="BOOTSTRAP"
              detail={
                "Como Front-End Junior, aplico Vue.js para crear interfaces de usuario interactivas y dinámicas. Utilizo Vue.js para mejorar la experiencia del usuario, manejar datos en tiempo real, y facilitar la actualización y renderizado de elementos en la página web de manera eficiente. Con Vue.js, puedo reutilizar componentes, implementar reactividad en la interfaz y trabajar en colaboración con el Back-End para desarrollar aplicaciones web modernas y de alto rendimiento."
              }
            >
              <IconComponent name={"BOOTSTRAP"}>
                <FaBootstrap size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="TAILWIND"
              detail={
                "Como Front-End Junior, aplico Tailwind en proyectos web mejora significativamente la velocidad y la eficiencia de desarrollo. Este framework utiliza clases CSS utilitarias directamente en el HTML, lo que me permite definir estilos, márgenes, rellenos, colores y tipografía de manera ágil. Además, Tailwind   es altamente personalizable, lo que facilita la adaptación a la identidad visual del proyecto y mantiene la coherencia en el diseño. Su enfoque en la modularidad promueve la reutilización de componentes y secciones, y su soporte para la responsividad optimiza la experiencia del usuario en diferentes dispositivos."
              }
            >
              <IconComponent name={"TAILWIND"}>
                <SiTailwindcss size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="GIT"
              detail={
                "Como Front-End Junior, utilizo git para navergar entre ramas del proyecto, ademas de que los puedo desplegar en github, tambien lo puedo hacer en vercel, netifly, para la previa visualizacion del proyecto en el que este trabajando y asi el cliente lo pueda observar"
              }
            >
              <IconComponent name={"GIT"}>
                <FaGitAlt size={25} />
              </IconComponent>
            </ToastComponent>

            <ToastComponent
              severity=""
              summary="GITHUB"
              detail={
                "Como Front-End Junior, utilizo github para guardar mis proyectos, ademas de que los puedo desplegar y visualizar en github, tener mi codigo para futuras ocaciones lo tenga que utilizar"
              }
            >
              <IconComponent name={"GITHUB"}>
                <FaGithub size={25} />
              </IconComponent>
            </ToastComponent>
          </div>
        </div>
        {/* <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">EDUCACIÓN</h2>
          <p className="text-sm lg:text-base opacity-55">
            Mi Formacion Academica y Autonoma como desarrollador Frontend, actuamente estudio ingenieria de software.
          </p>
          <br />
          <div className="text-sm lg:text-base">
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; Desarrollador FullStack - Básico e Intermedio(Universidad
              Distrital José Francisco De Caldas )
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
            &#187; Curso Desarrollo web Modulo (1/2) (2/2) (Google Actívate)
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; Universidad Desarrollo web-FrontEnd Web Developer(bootcamp
              Udemy-Ing. Ubaldo Acosta)
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; Universidad JavaScript - De Cero a Experto
              JavaScript(bootcamp Udemy-Ing. Ubaldo Acosta)
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; Vue desde Cero(bootcamp Udemy-Yirsis Serrano Administrador
              en T.I. y Fullstack Developer)
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; Vue.js - Intermedio(bootcamp Udemy-Fernando Herrera A
              Full-Stack Developer & Teacher)
            </p>
            <p className="p-2 text-white hover:text-red-300 opacity-55 hover:opacity-100">
              &#187; CSS La Guía Completa - Flexbox, CSS Grid, SASS(bootcamp
              Udemy-Juan Pablo De la torre Valdez)
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
