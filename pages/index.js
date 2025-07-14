import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Más Ventas, Menos Reuniones | Automatiza tu Proceso Comercial</title>
        <meta
          name="description"
          content="Sistema de ventas asincrónicas para empresas que quieren escalar sin videollamadas. Automatización, eficiencia y validación antifraude con SHILLBUSTER."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-100 text-gray-900 p-8">
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Sistema de Ventas Asincrónicas</h1>
          <p className="mb-6">
            Bienvenido. Este es un sistema pensado para presentar servicios o productos sin presión, sin videollamadas y sin reuniones.
          </p>

          <h2 className="text-2xl font-semibold mb-2">¿Qué es esto?</h2>
          <p className="mb-4">
            Es una página que funciona sola: explica lo que ofrezco, responde preguntas comunes y te permite decidir si quieres saber más… cuando tú quieras.
          </p>

          <h2 className="text-2xl font-semibold mb-2">¿Qué incluye?</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Un sistema de ventas sin llamadas</li>
            <li>Formulario de interés asincrónico</li>
            <li>Mecanismo antifraude (SHILLBUSTER)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-2">¿Quieres saber más?</h2>
          <p className="mb-4">
            Rellena el siguiente formulario y me pondré en contacto contigo:
          </p>

          <form
            action="https://formsubmit.co/moracanopablo@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              name="mensaje"
              placeholder="¿Qué te interesa saber?"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </>
  );
}