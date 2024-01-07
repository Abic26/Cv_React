// "use client";
import { Avatar } from "keep-react";
export const HomeComponent = () => {
  return (
    <div className="text-white bg-opacity-80 min-h-screen flex justify-end items-center ">
       <div className="px-6 container mx-auto flex flex-col lg:flex-row flex-wrap justify-start items-center absolute inset-0 md:pt-72 lg:pb-96">
        <div className="text-center lg:text-left w-full lg:max-w-3xl">
          <div className="flex justify-start ml-2">
            <Avatar className="" shape="circle" size="xl"  img="./abic_ai.png"/>

          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-bunker-100">
            Andres F<span className="text-red-300">.</span> Lopez
          </h1>
          <h2 className="text-bunker-200 mt-2 text-xl md:text-2xl lg:text-4xl font-medium">
            Programador Web <span className="mx-auto text-red-300">{"<"}</span> Front End <span className="mx-auto text-red-300">{"/>"}</span>
          </h2>
          <p className="mt-4 opacity-45">
          Soy artífice digital que combina diseño y tecnología para crear experiencias web fascinantes e inolvidables. Permiteme convertir tus ideas en realidades digitales que cautivan y funcionan a la perfección.
          </p>
        </div>
        </div>
    </div>
  );
}
