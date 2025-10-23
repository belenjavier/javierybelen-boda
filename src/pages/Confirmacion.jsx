import React from "react";

export default function Confirmacion() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-4xl font-bold mb-6 text-[#3a4a2a]">Confirmar asistencia</h2>
      <p className="max-w-md mb-6 text-lg">
        Por favor, confirma tu asistencia antes del <strong>31 de diciembre de 2025</strong>.
      </p>

      <a
        href="https://formurl.com/to/BelenyJavier-21defebrerode2026"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3a4a2a] text-white px-6 py-3 rounded-full hover:bg-[#2d3b1f] transition-colors"
      >
        Confirmar asistencia
      </a>

      <p className="text-sm text-gray-500 mt-6">
        Si tienes alguna alergia o prefieres menú vegetariano, por favor indícalo en el formulario 💐
      </p>
    </section>
  );
}
