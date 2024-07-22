"use client";
import { ExperienciaComponentCodeinfo } from "./experiencia_codeinfo";
import { ExperienciaComponentAzteca } from "./experiencia_azteca";

export const ExperienciaComponent = () => {
  return (
    <div
      id="experiencia"
      className="flex flex-col min-h-screen text-white p-5 lg:p-20"
    >
      <h3 className="text-3xl lg:text-4xl font-bold mb-6">
        Experiencia Laboral
      </h3>
      <div className="flex flex-row justify-between space-x-4">
        <div className="flex-1">
          <ExperienciaComponentCodeinfo />
        </div>
        <div className="flex-1">
          <ExperienciaComponentAzteca />
        </div>
      </div>
    </div>
  );
};
