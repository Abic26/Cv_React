"use client";
import { Timeline } from "keep-react";
import { IoCodeSlash } from "react-icons/io5";

export const ExperienciaComponentAzteca = () => {
  const WorkData = [
    {
      icon: <IoCodeSlash className="text-xl" />,
      company: "Azteca Internacional",
      title: "Desarrollador Frontend & Rpa",
      body: "Forme parte del equipo de Azteca Internaciónal durante 9 meses, desempeñándome como desarrollador frontend. Durante este tiempo, he tenido la oportunidad de aplicar y ampliar mis habilidades en el diseño y desarrollo de interfaces de usuario utilizando tecnologías y frameworks modernos. Colaborar en proyectos significativos ha enriquecido mi experiencia, permitiéndome contribuir al crecimiento y la innovación dentro de la empresa. Esta trayectoria en Azteca Inter ha sido fundamental para mi desarrollo profesional, brindándome la oportunidad de trabajar en un entorno dinámico y desafiante.",
    },
    {
      title: "Proyectos desarrollados",
    },
    {
      title: "Trafico Azteca",
      body: "Este sistema de gestión y análisis de campañas de marketing digital, diseñado con el framework Vue3, destaca por su capacidad para proporcionar una visión exhaustiva de las campañas. Facilita la creación, programación, asignación y análisis detallado de las estrategias de marketing. Además de ofrecer herramientas analíticas para estudiar el comportamiento de usuarios, dispositivos y localización geográfica, se integra de manera eficiente con 9hit a través de una API REST. Esta conexión con 9hit, respaldada por una base de datos SQLite, potencia aún más la eficacia del sistema al brindar una plataforma sólida para la gestión y optimización de campañas mediante una colaboración fluida con la potente infraestructura de 9hit.",
    },
    {
      title: "Socket BotTraf",
      body: "El proyecto emplea Socket.IO para establecer una conexión bidireccional en tiempo real entre el frontend (Vue.js) y el backend (Node.js con Express). Utilizando websockets, esta biblioteca permite una transmisión instantánea de datos entre el usuario y el servidor. En el frontend, los datos cruciales se envían al servidor mediante eventos de Socket.IO, mientras que el backend los recibe y procesa en tiempo real. Esta arquitectura de sockets facilita una comunicación eficiente y directa, priorizando la interacción instantánea entre el usuario y la lógica del servidor.",
    },
    {
      title: "Bot Organico",
      body: "El backend en Python recibe datos en tiempo real del frontend a través de la conexión proporcionada por Socket.IO. Estos datos son esenciales para modificar un archivo clave que define campañas y servicios en 9hits para la generación de tráfico. El componente Python también incorpora un bot que, utilizando los datos modificados, ajusta la estrategia de generación de tráfico según las preferencias del usuario. Además, el bot ejecuta macros en 9hits mediante sockets, automatizando el proceso de generación de tráfico web según las especificaciones dadas. En resumen, el componente Python actúa como puente entre el frontend y la plataforma 9hits, procesando datos en tiempo real y ejecutando acciones específicas a través del bot para automatizar la generación de tráfico web.",
    },
    {
      title: "Bot 9Hits ",
      body: "Trabajé con 9Hits, usando macros para automatizar la navegación web y aumentar el tráfico. Asigné estas macros a bots en 9Hits, mejorando la visibilidad y métricas SEO de los sitios web. En el backend, implementé Socket.IO para una comunicación en tiempo real entre el frontend y el backend. Un bot en Python procesa datos del frontend, ajusta estrategias y ejecuta macros en 9Hits, logrando una generación eficiente de tráfico. En resumen, mi enfoque fue la integración efectiva de 9Hits y macros, combinando automatización y comunicación fluida entre el frontend y el backend mediante Socket.IO.",
    },
    {
        title: "Feedback ",
        body: "El desarrollo de estos proyectos me proporcionó un sólido conocimiento en el uso de Express junto con Socket.IO, permitiéndome gestionar acciones en tiempo real de manera directa. Además, adquirí habilidades en Python, aplicándolo para automatizar procesos como la modificación de datos en archivos en función de la información proveniente de una base de datos. También aprendí a realizar automatizaciones de bots, empleando Python para ejecutar programas a través de una interfaz desarrollada en Vue.js. La experiencia incluyó la utilización de librerías externas para mejorar la interfaz de usuario y la experiencia del usuario, enriqueciendo así el aspecto visual y funcional de mis aplicaciones.",
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
              <Timeline.Title className="hover:text-red-300 cursor-default">{item.title}</Timeline.Title>
              <Timeline.Body className="opacity-55 text-sm">{item.body}</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};
