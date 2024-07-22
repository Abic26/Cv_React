"use client";
import { Timeline } from "keep-react";
import { IoCodeSlash } from "react-icons/io5";

export const ExperienciaComponentCodeinfo = () => {
  const WorkData = [
    {
      icon: <IoCodeSlash className="text-xl" />,
      company: "Codesinfo",
      title: "Desarrollador Frontend",
      body: "Formé parte del equipo de CODESINFO durante 1 año, desempeñándome como desarrollador frontend. Durante este tiempo, tuve la oportunidad de aplicar y ampliar mis habilidades en el diseño y desarrollo de interfaces de usuario utilizando tecnologías y frameworks modernos. Colaborar en proyectos significativos ha enriquecido mi experiencia, permitiéndome contribuir al crecimiento y la innovación dentro de la empresa. Esta trayectoria en CODESINFO ha sido fundamental para mi desarrollo profesional, brindándome la oportunidad de trabajar en un entorno dinámico y desafiante.",
    },
    {
      title: "Funciones Realizadas",
    },
    {
      title: "Desarrollo Frontend con Vue.js",
      body: "Diseño e implementación de interfaces de usuario interactivas y receptivas utilizando Vue.js. Colaboración con diseñadores para traducir diseños de usuario en componentes y funcionalidades de Vue.js. Integración de servicios web y API para obtener y actualizar datos de manera eficiente.",
    },
    {
      title: "Desarrollo Backend con Node.js y Laravel",
      body: "Construcción y mantenimiento de servidores backend utilizando Node.js y Laravel. Implementación de lógica de negocio y manipulación de datos en el lado del servidor. Creación de API RESTful para permitir la comunicación entre el frontend y el backend de manera eficiente.",
    },
    {
      title: "Gestión de Bases de Datos MySQL y MongoDB",
      body: "Diseño y optimización de bases de datos MySQL para soportar aplicaciones eficientes. Desarrollo de consultas SQL para recuperar y manipular datos según los requisitos del proyecto. Implementación de medidas de seguridad y rendimiento en bases de datos.",
    },
    {
      title: "Colaboración en Equipos Ágiles",
      body: "Participación activa en reuniones diarias de scrum y planificación de sprint. Colaboración con otros desarrolladores, diseñadores y equipos interdisciplinarios para lograr objetivos comunes. Uso de herramientas de control de versiones como Git para la gestión colaborativa del código fuente.",
    },
    {
      title: "Mantenimiento y Actualización de Aplicaciones",
      body: "Realización de actualizaciones de software para mejorar la funcionalidad y seguridad. Manejo de tareas de mantenimiento, como la solución de errores y la aplicación de parches de seguridad.",
    },
    {
      title: "Feedback",
      body: "Mi experiencia en CODESINFO me ha proporcionado un profundo conocimiento en el desarrollo frontend con Vue.js y la integración con servicios backend utilizando Node.js y Laravel. Trabajar en un entorno ágil y colaborativo ha mejorado mis habilidades en la gestión de proyectos y la resolución de problemas. Además, la oportunidad de colaborar con un equipo interdisciplinario y participar en proyectos significativos ha sido clave para mi crecimiento profesional. Estoy agradecido por el apoyo y las oportunidades brindadas, que han sido cruciales para mi desarrollo como desarrollador.",
    },
  ];

  return (
    <div id="experiencia" className="min-h-screen text-white p-10 lg:p-20">
      <Timeline className="">
        {WorkData.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point></Timeline.Point>
            <Timeline.Content>
              {item.company && (
                <Timeline.Time className="flex gap-2 text-xl items-center hover:text-red-300 opacity-55 hover:opacity-100 cursor-default">
                  {item.company}
                  {item.icon}
                </Timeline.Time>
              )}
              <Timeline.Title className="hover:text-red-300 cursor-default">
                {item.title}
              </Timeline.Title>
              <Timeline.Body className="opacity-55 text-sm">
                {item.body}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
