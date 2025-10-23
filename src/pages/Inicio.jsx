import React from "react";
import backgroundImage from "../assets/portada.jpg"; // asegúrate de que la imagen esté aquí

export default function Inicio() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-[#fdfaf6] px-4"
    >
      <div className="border-4 border-[#d8c8a5] rounded-2xl shadow-md p-2 mb-6">
        <img
          src={backgroundImage}
          alt="Javier y Belén"
          className="rounded-xl w-80 md:w-[500px] object-cover"
        />
      </div>

      <h1 className="text-5xl font-serif mb-2 text-neutral-800">
        Javier & Belén
      </h1>
      <p className="text-lg tracking-wide text-green-700">Nos casamos 💚</p>
      <p className="mt-2 text-sm text-neutral-600">21 de febrero de 2026</p>
    </section>
  );
}



