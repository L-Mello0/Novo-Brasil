import { useState } from "react";
import "./App.css";

function App() {
  const [apoios, setApoios] = useState(1456782);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-800 text-white py-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Brasil 2030 — Um Futuro Possível</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Movimento nacional para zerar a dívida, estabilizar a economia e transformar educação, tecnologia e defesa até 2030.
        </p>
      </header>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Nossos Pilares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Economia Responsável" description="Zerar a dívida interna e externa em 4 anos, com controle de gastos, corte de privilégios e reforma tributária." />
          <Card title="Tecnologia & Defesa" description="Investimento em satélites, IA nacional, internet 100% pública e soberania estratégica em energia e território." />
          <Card title="Educação de Base e Elite" description="Educação básica obrigatória com foco em ciência e ética. Escolas técnicas e universidades públicas com orçamento blindado." />
        </div>
      </section>

      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-xl font-semibold mb-2">Apoio Popular</h2>
        <p className="text-lg mb-4">Já somos <span className="font-bold text-blue-700">{apoios.toLocaleString()}</span> brasileiros comprometidos com 2030.</p>
        <button
          onClick={() => setApoios((n) => n + 1)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Quero me engajar
        </button>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Resultados até agora</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Economia de R$ 112 bilhões com corte de gastos não essenciais</li>
          <li>Redução de 37% na dívida pública bruta em 18 meses</li>
          <li>Internet pública chegando a 91% das regiões do país</li>
          <li>Criação do INATEC — Instituto Nacional de Tecnologia e Defesa</li>
          <li>30 mil jovens formados em cursos técnicos gratuitos</li>
        </ul>
      </section>

      <section className="py-12 bg-gray-100 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">O que precisamos até 2029?</h2>
        <ul className="list-disc list-inside text-gray-800 text-left max-w-xl mx-auto space-y-2">
          <li>Engajamento de +10 milhões de cidadãos</li>
          <li>Adesão de 300 parlamentares comprometidos com o plano</li>
          <li>Investimento nacional de R$ 500 bilhões em tecnologia e defesa</li>
          <li>Parcerias com setor privado e universidades públicas</li>
        </ul>
      </section>

      <footer className="bg-blue-900 text-white py-6 text-center text-sm">
        © 2025 - 2029 Brasil com Futuro. Movimento independente, apartidário e nacionalista.
      </footer>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-2 text-blue-800">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default App;

