import { useState } from "react";
import "./App.css";

function App() {
  const [supporters, setSupporters] = useState(100457);

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Brasil com Futuro</h1>
        <p className="text-lg">
          Movimento pela Renovação Política, Transparência e Desenvolvimento Sustentável
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card title="Engajamento Popular" description="Campanhas nas redes, educação política e mobilizações públicas para informar e engajar milhões." />
        <Card title="Tecnologia e Transparência" description="App de fiscalização política, rankings de deputados e plataformas de participação popular." />
        <Card title="Renovação Política" description="Formação de novos líderes éticos com capacitação técnica para disputar eleições." />
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Já somos {supporters.toLocaleString()} apoiadores!
        </h2>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          onClick={() => setSupporters((s) => s + 1)}
        >
          Quero apoiar
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Propostas Prioritárias"
          description={
            <ul className="list-disc list-inside">
              <li>Fim do foro privilegiado</li>
              <li>Fim da reeleição para o Executivo</li>
              <li>Cláusula de barreira e redução de partidos</li>
              <li>Voto distrital misto</li>
              <li>Orçamento participativo digital</li>
            </ul>
          }
        />
        <Card
          title="Como participar"
          description={
            <ul className="list-disc list-inside">
              <li>Divulgando nossas ideias nas redes</li>
              <li>Participando de núcleos regionais</li>
              <li>Se candidatando com apoio do movimento</li>
              <li>Contribuindo financeiramente</li>
            </ul>
          }
        />
      </section>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2025 Brasil com Futuro — Movimento Apartidário. Todos os direitos reservados.
      </footer>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-sm text-gray-800">{description}</div>
    </div>
  );
}

export default App;
