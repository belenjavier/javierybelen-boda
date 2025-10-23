import React from "react";
import { Leaf } from "lucide-react"; // 🌿 Importamos el icono floral

export default function Autobuses() {
  return (
    <section
      id="autobuses"
      className="min-h-screen flex flex-col items-center justify-center bg-[#fdfaf6] px-6 py-20 text-center"
    >
      {/* 🌿 Título con icono */}
      <div className="flex items-center gap-3 mb-6">
        <Leaf className="text-green-700 w-8 h-8" />
        <h2 className="text-4xl font-serif text-green-900">
          Autobuses
        </h2>
        <Leaf className="text-green-700 w-8 h-8" />
      </div>

      <p className="max-w-2xl text-lg text-neutral-700 leading-relaxed mb-10">
        Para vuestra comodidad, hemos organizado autobuses que saldrán y volverán el día de la boda.
      </p>

      <div className="bg-white/70 rounded-2xl shadow-md p-8 max-w-xl border border-green-100">
        <h3 className="text-2xl font-semibold text-green-800 mb-3">
          Salida
        </h3>
        <p className="text-neutral-700 mb-4">
          <strong>Desde:</strong> Parada de la Marina, calle San Rafael <br />
          <strong>Hora:</strong> 13:30 h
        </p>

        <h3 className="text-2xl font-semibold text-green-800 mb-3 mt-6">
          Regreso
        </h3>
        <p className="text-neutral-700">
          <strong>Desde:</strong> Molí Nou <br />
	  <strong>Hasta:</strong> Fata morgana <br />
          <strong>Primer regreso:</strong> 20:00 h <br />
	  <strong>Segundo regreso:</strong> 22:00 h
        </p>
      </div>

      <p className="mt-10 text-sm text-neutral-500 italic">
        * Por favor, indicad en la confirmación si necesitáis plaza en el autobús. 💚
      </p>
    </section>
  );
}
