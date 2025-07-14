import Head from "next/head";
import { useState } from "react";
import { Mail, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value.trim();
    const email = e.target.email.value.trim();
    const consulta = e.target.mensaje.value.trim();
    const honeypot = e.target._honey.value;

    if (honeypot !== "") {
      alert("Detección de actividad sospechosa. Formulario bloqueado.");
      return;
    }

    if (!nombre || !email || !consulta) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!email.includes("@") || email.length < 6) {
      alert("El correo electrónico parece inválido.");
      return;
    }

    const ultimoEnvio = localStorage.getItem("ultimo_envio");
    const ahora = Date.now();

    if (ultimoEnvio && ahora - parseInt(ultimoEnvio) < 60000) {
      alert("Por favor, espera unos segundos antes de volver a enviar.");
      return;
    }

    localStorage.setItem("ultimo_envio", ahora.toString());
    setMensaje("✅ Enviado correctamente. ¡Gracias por tu interés!");
    e.target.submit();
  };

  return (
    <>
      <Head>
        <title>Ventas Asincrónicas | Automatiza tu proceso</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-4 py-12 font-sans">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
            Sistema de Ventas Asincrónicas
          </h1>

          <p className="text-center text-gray-600 text-lg md:text-xl mb-6">
            Bienvenido. Este es un sistema pensado para presentar servicios o productos sin presión, sin videollamadas y sin reuniones.
          </p>

          <div className="flex justify-center gap-4 text-gray-500 text-2xl mb-6">
            <PhoneCall />
            <Mail />
            <ShieldCheck />
          </div>

          <div className="text-left text-gray-700 space-y-6 text-lg mb-10">
            <div>
              <h2 className="text-2xl font-semibold mb-1">¿Qué es esto?</h2>
              <p>
                Es una página que funciona sola: explica lo que ofrezco, responde preguntas comunes y te permite decidir si quieres saber más… cuando tú quieras.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-1">¿Qué incluye?</h2>
              <ul className="list-disc list-inside pl-2">
                <li>Un sistema de ventas sin llamadas</li>
                <li>Formulario de interés asincrónico</li>
                <li>Mecanismo antifraude (SHILLBUSTER)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-1">¿Quieres saber más?</h2>
              <p>
                Rellena el siguiente formulario y me pondré en contacto contigo:
              </p>
            </div>
          </div>

          {mensaje && (
            <p className="text-green-600 text-center font-medium mb-4">
              {mensaje}
            </p>
          )}

          <form
            onSubmit={manejarEnvio}
            action="https://formsubmit.co/moracanopablo@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="text" name="_honey" className="hidden" />

            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              required
            />
            <textarea
              name="mensaje"
              rows="4"
              placeholder="¿Qué te interesa saber?"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-lg"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all text-lg shadow-md"
            >
              Enviar
            </button>
          </form>
        </motion.section>
      </main>
    </>
  );
}
