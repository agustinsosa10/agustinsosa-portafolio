import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = ["JavaScript", "React", "HTML", "CSS", "TailwindCSS"];

  const backendSkills = [
    "Node.js",
    "Express",
    "Java",
    "Python",
    "PHP",
    "MongoDB",
    "MySQL",
    "Next.js",
    "PostgreSQL",
  ];

  const versionsControlSkills = ["GitHub", "Git"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre Mi
          </h2>

          <div className="glass rounded-xl p-8 border-white/10  border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Soy Agustín Sosa, Técnico en Programador de Sistemas graduado en la Universidad Nacional de Villa Mercedes (UNViMe). Me motiva aprender, investigar y mejorar constantemente. Disfruto trabajar con organización, atención al detalle y un enfoque práctico. A lo largo de mi formación y mediante proyectos personales, he adquirido experiencia desarrollando aplicaciones web, backend y bases de datos. Busco seguir creciendo como desarrollador y participar en proyectos donde pueda aportar soluciones claras, simples y eficientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">FrontEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl pl-2 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Control de Versiones</h3>
                <div className="flex flex-wrap gap-2">
                  {versionsControlSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Educacion </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Programador Universitario de Sistemas </strong> -
                  Universidad Nacional de Villa Mercedes (2022-2025). Graduado
                </li>
                <li>
                  <strong>Tecnicatura en Mantenimiento Industrial</strong> -
                  Universidad Nacional de San Luis (2021-2022).
                </li>
                <li>
                  <strong>Ingenieria Quimica</strong> - Universidad Nacional de
                  San Luis (2020-2021).
                </li>
                <li>
                  Curso: <strong>Full Stack Open</strong> - Desarrollo Web
                  Moderno (Actualidad)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experiencia Academica</h3>
              <div className="space-y-4 text-gray-300 ">
                <div>
                  <li>
                    <h4 className="font-semibold">
                      Diseño de base de datos relacional con MySQL{" "}
                    </h4>
                    <p>
                      {" "}
                      Modelado y normalizacion de esquema para gestion de datos
                    </p>
                  </li>
                </div>
                <div>
                  <li>
                    <h4 className="font-semibold">CRUD con PHP y MySQL</h4>
                    <p>Aplicación fullstack con enfasis en gestion de datos</p>
                  </li>
                </div>
                <div>
                  <li>
                    <h4 className="font-semibold">
                      Sistema de votos electrónicos con Java y phpMyAdmin
                    </h4>
                    <p>
                      Desarrollo Backend con Java y gestión de base de datos con
                      MySQL.
                    </p>
                  </li>
                </div>
                <div>
                  <li>
                    <h4 className="font-semibold">
                      Sistema ABM de Reparaciones en C
                    </h4>
                    <p>
                      Desarrollo de una aplicación web para toma de pedidos en
                      locales gastronómicos, con gestión de productos, carrito y
                      flujo completo de autoservicio.
                    </p>
                    <p></p>
                  </li>
                </div>
                <div>
                  <li>
                    <h4 className="font-semibold">
                      Sistema de Autoservicio con Next.js
                    </h4>
                    <p>
                      Desarrollo de una aplicación web para toma de pedidos en
                      locales gastronómicos, con gestión de productos, carrito y
                      flujo completo de autoservicio.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
