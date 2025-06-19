import { useState } from "react";
import "./App.css";

function App() {
  const [apoios, setApoios] = useState(18);

  return (
    <div
      className="min-h-screen font-sans bg-cover bg-center text-gray-900"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      <div className="bg-white/90 min-h-screen">
        <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 text-center shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Brasil 2030: Um Compromisso com o Futuro</h1>
          <p className="text-lg max-w-4xl mx-auto">
            Iniciativa nacional para reestruturar a economia, modernizar o Estado e garantir um futuro próspero e soberano para todos os brasileiros.
          </p>
        </header>

        <section className="py-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">📊 Situação Atual (2025)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <ul className="list-disc list-inside space-y-2">
              <li>Dívida pública bruta: R$ 7,7 trilhões (75% do PIB)</li>
              <li>Déficit primário: R$ 92,5 bilhões (Tesouro Nacional, abr/2025)</li>
              <li>Inflação acumulada em 12 meses: 3,69% (IPCA)</li>
              <li>Taxa Selic: 10,50% a.a.</li>
              <li>Investimento em C&T: 1,3% do PIB (OCDE)</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>IDEB médio do ensino fundamental: 5,3</li>
              <li>Taxa de desemprego: 7,9%</li>
              <li>PIB per capita: R$ 52.640</li>
              <li>Gasto público com funcionalismo: R$ 1,2 trilhão/ano</li>
              <li>Ranking mundial de inovação: 49ª posição</li>
            </ul>
          </div>
        </section>

        <section className="py-10 bg-gray-100 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">🎯 Nossa Meta para 2030</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-lg">
            <li>Zerar o déficit primário e reduzir a dívida pública para abaixo de 55% do PIB</li>
            <li>Universalizar o ensino técnico e dobrar o IDEB para 6,5</li>
            <li>Transformar o Brasil em potência regional em tecnologia limpa e defesa</li>
            <li>PIB per capita acima de R$ 70 mil</li>
            <li>Ranking de inovação entre os 20 primeiros do mundo</li>
          </ul>
        </section>

        <section className="py-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-green-700">🛠️ O Que Precisamos Fazer Agora</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="1. Reforma Administrativa" description="Reduzir privilégios, digitalizar serviços públicos e aumentar a eficiência do Estado." />
            <Card title="2. Reforma Tributária Inteligente" description="Simplificar impostos, desonerar produção e combater sonegação com tecnologia." />
            <Card title="3. Investimento Massivo em Educação Técnica" description="Criar 10 mil escolas técnicas e formar 1 milhão de profissionais/ano." />
            <Card title="4. Programa Nacional de Inovação" description="Fomentar startups, tecnologia dual (civil/militar) e inteligência artificial nacional." />
            <Card title="5. Soberania Energética" description="Investir em energia solar, eólica e biocombustíveis; alcançar 100% renovável na matriz elétrica." />
            <Card title="6. Segurança Estratégica" description="Modernizar Forças Armadas e garantir proteção do espaço aéreo, amazônia e águas territoriais." />
          </div>
        </section>

        <section className="py-12 bg-blue-50 text-center">
          <h2 className="text-xl font-semibold mb-3">📣 Apoio Popular</h2>
          <p className="text-lg mb-4">
            <span className="font-bold text-blue-700">{apoios}</span> brasileiros associados à proposta.
          </p>
          <button
            onClick={() => setApoios((n) => n + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Quero apoiar
          </button>
        </section>

        <footer className="bg-blue-900 text-white py-6 text-center text-sm">
          © 2025 - Brasil 2030. Dados: IBGE, Banco Central, INEP, OCDE, Tesouro Nacional.
        </footer>
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
      <h3 className="text-lg font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default App;
