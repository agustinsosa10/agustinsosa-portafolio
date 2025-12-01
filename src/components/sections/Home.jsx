import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-1 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Agustin Sosa - Developer
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Técnico en Programador de Sistemas graduado en la Universidad Nacional de Villa Mercedes (UNViMe). Apasionado por la tecnología y por encontrar soluciones claras y simples, siempre buscando aprender algo nuevo y mejorar en cada proyecto que emprendo.
          </p>
          <div className="flex justify-center space-x-4 ">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hideen hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contacto
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 mt-1">
            <div className="flex gap-10 justify-center items-center mt-10 text-white">
              <a
                href="https://www.instagram.com/agustinsosaa.10/"
                target="_blank"
                className="flex items-center gap-2 hover:text-pink-400 transition"
              >
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/agustin-sosa-m10/"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-300 transition"
              >
                <FaLinkedinIn size={24} />
                <span>Linkedin</span>
              </a>
              <a
                href="https://github.com/agustinsosa10"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-300 transition"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
            </div>
            <a
              href="/CV-MARCELO-AGUSTIN-SOSA.pdf"
              download
              className="bg-blue-500 flex items-center justify-center gap-2 text-white font-semibold py-4 mt-5 w-full md:w-[400px] rounded-md hover:bg-sky-600 transition"
            >
              Descarga Mi CV
              <FaDownload size={18} />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
