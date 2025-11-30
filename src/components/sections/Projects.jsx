import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Proyectos{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Sistema de Votación Electrónica</h3>
              <p className="text-gray-400 mb-3">
                Aplicación desarrollada en Java que permite gestionar procesos de votación de forma segura y organizada, incluyendo registro de votos, conteo automático y administración de candidatos mediante una base de datos MySQL.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/agustinsosa10/proyecto-votos"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  Ver proyecto →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Web de Cócteles</h3>
              <p className="text-gray-400 mb-3">
                Aplicación web que permite explorar diferentes recetas de cócteles obtenidas desde una API externa, mostrando ingredientes, imágenes y detalles de preparación.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/agustinsosa10/cocktel"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  Ver proyecto →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">FullStackOpen – Ejercicios y prácticas del curso de desarrollo web completo</h3>
              <p className="text-gray-400 mb-3">
               Repositorio con mis resoluciones del curso FullStackOpen, donde trabajé diversos ejercicios que abarcan desde fundamentos de aplicaciones web hasta desarrollo de frontend, backend, comunicación cliente-servidor y arquitectura modular. Refuerza mi formación en desarrollo web integral, organización de código y buenas prácticas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/agustinsosa10/fullstackopen"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  Ver proyecto →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Node.js – Prácticas del curso FullStackOpen</h3>
              <p className="text-gray-400 mb-3">
                Repositorio con ejercicios y proyectos desarrollados durante el curso FullStackOpen, enfocados en el backend con Node.js. Incluye manejo de rutas, creación de APIs, uso de Express, manejo de dependencias con npm y fundamentos de desarrollo del lado del servidor.Desarrollo Backend con Java y gestión de base de datos con MySQL
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/agustinsosa10/proyecto-votos"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  Ver proyecto →
                </a>
              </div>
            </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">FullStackOpen – Ejercicios y prácticas del curso de desarrollo web completo</h3>
              <p className="text-gray-400 mb-3">
               Repositorio con mis resoluciones del curso FullStackOpen, donde trabajé diversos ejercicios que abarcan desde fundamentos de aplicaciones web hasta desarrollo de frontend, backend, comunicación cliente-servidor y arquitectura modular. Refuerza mi formación en desarrollo web integral, organización de código y buenas prácticas.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/agustinsosa10/fullstackopen"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  Ver proyecto →
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
