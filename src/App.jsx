import React, { useState } from "react";
import backgroundImage from "./assets/portada.jpg";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [hotelOpen, setHotelOpen] = useState(false); // estado para desplegable hotel

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <img
              src={backgroundImage}
              alt="Javier y Belén"
              className="rounded-2xl shadow-lg w-80 md:w-[450px] object-cover mb-6"
            />
            <h1 className="text-5xl font-serif mb-2">Javier & Belén</h1>
            <p className="text-lg tracking-wide">Nos casamos 💚</p>
            <p className="mt-2 text-sm">15 de junio de 2025</p>
          </section>
        );

      case "ceremonia":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <h2 className="text-4xl font-serif mb-8 text-green-700">Ceremonia</h2>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 mb-6 w-full max-w-md">
              <h3 className="text-2xl font-serif text-green-700 mb-2">💒 Iglesia</h3>
              <p className="font-medium">Iglesia de San Pedro</p>
              <p className="text-sm text-neutral-600 mt-1">A las 17:30</p>
              <p className="text-sm text-neutral-500 mt-1">
                Calle Mayor 12, Salamanca
              </p>
              <a
                href="https://maps.google.com/?q=Iglesia+de+San+Pedro,+Calle+Mayor+12,+Salamanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
              >
                📍 Ver en mapa
              </a>
            </div>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 w-full max-w-md">
              <h3 className="text-2xl font-serif text-green-700 mb-2">🍽️ Banquete</h3>
              <p className="font-medium">Finca Las Encinas</p>
              <p className="text-sm text-neutral-600 mt-1">A partir de las 19:30</p>
              <p className="text-sm text-neutral-500 mt-1">
                Camino de Alba 25, Salamanca
              </p>
              <a
                href="https://maps.google.com/?q=Finca+Las+Encinas,+Camino+de+Alba+25,+Salamanca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
              >
                📍 Ver en mapa
              </a>
            </div>
          </section>
        );

      case "autobuses":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <h2 className="text-4xl font-serif mb-8 text-green-700">Autobuses</h2>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 w-full max-w-md mb-6">
              <h3 className="text-xl font-medium text-green-700 mb-2">
                🕓 Ida
              </h3>
              <p className="text-sm text-neutral-700">
                Salida desde la Plaza Mayor de Salamanca a las <strong>16:45</strong>.
              </p>
            </div>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 w-full max-w-md">
              <h3 className="text-xl font-medium text-green-700 mb-2">🌙 Vuelta</h3>
              <p className="text-sm text-neutral-700">
                Autobuses de regreso desde la finca a las <strong>02:00</strong> y{" "}
                <strong>04:00</strong>.
              </p>
            </div>
          </section>
        );

      case "hotel":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <h2 className="text-4xl font-serif mb-6 text-green-700">Hotel recomendado</h2>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 w-full max-w-md">
              <h3 className="text-2xl font-serif text-green-700 mb-4">
                🏨 Hotel Alameda Palace
              </h3>
              <button
                onClick={() => setHotelOpen(!hotelOpen)}
                className="px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors mb-4"
              >
                {hotelOpen ? "Ocultar precios" : "Ver precios"}
              </button>

              {hotelOpen && (
                <div className="text-sm text-neutral-700 space-y-2 animate-fadeIn">
                  <p>• Habitación doble estándar: 95€ / noche</p>
                  <p>• Habitación doble superior: 115€ / noche</p>
                  <p>• Suite: 145€ / noche</p>
                  <p className="text-xs text-neutral-500 mt-2">
                    *Incluye desayuno y parking gratuito
                  </p>
                </div>
              )}

              <div className="mt-6 text-sm text-neutral-700">
                <p>
                  Reserva directamente indicando “Boda Javier y Belén” para obtener
                  las tarifas especiales.
                </p>
                <p className="mt-2 font-medium">
                  📞 Teléfono: <a href="tel:+34923123456" className="text-green-700">923 123 456</a>
                </p>
                <p className="mt-1">
                  🌐 Web:{" "}
                  <a
                    href="https://www.hotelalamedapalace.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700"
                  >
                    hotelalamedapalace.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        );

      case "confirmacion":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <h2 className="text-4xl font-serif mb-6 text-green-700">
              Confirmación de asistencia
            </h2>
            <p className="max-w-md mb-4">
              Por favor, confirma tu asistencia antes del{" "}
              <strong>1 de mayo</strong>.
            </p>
            <a
              href="https://forms.gle/tu_enlace_de_confirmacion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition-colors"
            >
              💌 Confirmar asistencia
            </a>
          </section>
        );

      case "regalos":
        return (
          <section className="flex flex-col items-center justify-center text-center px-4 h-full">
            <h2 className="text-4xl font-serif mb-6 text-green-700">Regalos</h2>
            <p className="max-w-md mb-4">
              Lo más importante para nosotros es celebrar este día con vosotros.  
              Pero si queréis tener un detalle, podéis hacerlo aquí:
            </p>
            <div className="bg-white/80 rounded-2xl shadow-md p-6 w-full max-w-md">
              <p className="font-medium">💚 IBAN: ES12 3456 7890 1234 5678 9012</p>
              <p className="text-sm text-neutral-500 mt-1">
                Titulares: Javier y Belén
              </p>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-[#fdfaf6] text-neutral-800 font-serif h-screen flex flex-col">
      {/* 🌿 Menú superior */}
      <nav className="flex justify-center items-center flex-wrap gap-4 py-4 bg-white/80 backdrop-blur-md shadow-sm z-50">
        {[
          "inicio",
          "ceremonia",
          "autobuses",
          "hotel",
          "confirmacion",
          "regalos",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setActiveSection(item)}
            className={`capitalize transition-colors ${
              activeSection === item
                ? "text-green-700 border-b-2 border-green-700"
                : "hover:text-green-700"
            }`}
          >
            {item === "inicio"
              ? "Inicio"
              : item === "ceremonia"
              ? "Ceremonia"
              : item === "autobuses"
              ? "Autobuses"
              : item === "hotel"
              ? "Hotel"
              : item === "confirmacion"
              ? "Confirmación"
              : "Regalos"}
          </button>
        ))}
      </nav>

      {/* 💫 Contenido que cambia por secciones */}
      <main className="flex-1 transition-all duration-700 ease-in-out">
        {renderSection()}
      </main>
    </div>
  );
}