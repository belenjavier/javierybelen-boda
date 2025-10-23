import React from "react";

export default function Regalos() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-8">
      <h2 className="text-4xl font-bold mb-6 text-[#3a4a2a]">Regalos</h2>
      <p className="max-w-xl mb-4 text-lg">
        Vuestra presencia es el mejor regalo que podemos recibir. 💕
      </p>
      <p className="max-w-xl mb-8 text-lg">
        Pero si además queréis ayudarnos a cumplir algún sueño, aquí os dejamos nuestros datos bancarios:
      </p>

      <div className="bg-[#e5e3dc] px-6 py-4 rounded-xl shadow-md">
        <p><strong>Titulares:</strong> Javier y Belén</p>
        <p><strong>IBAN:</strong> ES26 0081 2712 0300 0445 7651</p>
      </div>
    </section>
  );
}
