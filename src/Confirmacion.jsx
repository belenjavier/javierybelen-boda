import { useState } from "react";

function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [asistira, setAsistira] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !asistira) {
      setMensaje("Por favor completa todos los campos 💕");
      return;
    }
    setEnviado(true);
    setMensaje("¡Gracias por confirmar, " + nombre + "! 💍");
  };

  if (enviado) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-pink-50 text-center">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">{mensaje}</h2>
        <p className="text-gray-700">Estamos encantados de contar contigo 💖</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-2">
          Confirmar asistencia
        </h2>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <select
          value={asistira}
          onChange={(e) => setAsistira(e.target.value)}
          className="border border-pink-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">¿Asistirás?</option>
          <option value="sí">Sí, allí estaré 💞</option>
          <option value="no">No podré asistir 😢</option>
        </select>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-md"
        >
          Enviar confirmación
        </button>
        {mensaje && <p className="text-pink-600 text-center">{mensaje}</p>}
      </form>
    </div>
  );
}

export default Confirmacion;

