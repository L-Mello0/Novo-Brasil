import { useState } from "react";
import "./App.css";

function App() {
  const [apoios, setApoios] = useState(1485603);

  return (
    <div
      className="min-h-screen font-sans bg-cover bg-center text-gray-900"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      <div className="bg-white/85 min-h-screen">
        <header className="bg-blue-900 text-white py-12 text-center shadow-lg">
          <h1 className="text-4xl font-bold mb-3">Brasil 2030 — Um Futuro Possível</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Iniciativa nacional por um Brasil economicamente soberano, socialmente justo e tecnologicamente avançado até 2030.
          </p>
        </header>

        <section className="py-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">A Realidade Atual</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            <li>Dívida pública bruta: R$ 7,7 trilhões (75% do PIB – Banco Central, 2024)</li>
            <li>Educação básica com IDEB médio de 5,3 (meta: 6,5 até 2030)</li>
            <li>Investimento em ciência e tecnologia: 1,3% do PIB (OCDE, 2023)</li>
            <li>Déficit público estimado em R$ 100 bilhões/ano (Tesouro Nacional)</li>
          </ul>
        </section>

        <section className="py-10 bg-blue-50 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">O Que Precisamos Fazer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="1. Estabilidade Fiscal"
              description="Aprovar reforma tributária ampla e cortar privilégios e desperdícios. Zerar déficit em 2 anos."
            />
            <Card
              title="2. Educação Técnica de Massa"
              description="Formar 1 milhão de técnicos por ano em TI, eletrônica e agricultura de precisão."
            />
            <Card
              title="3. Reindustrialização Verde"
              description="Produção nacional com foco em energia limpa, bioeconomia e inteligência artificial."
            />
          </div>
        </section>

        <section className="py-10 px-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-800">Onde Podemos Chegar até 2030</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Dívida pública reduzida para 50% do PIB</li>
            <li>PIB per capita acima de R$ 70 mil</li>
            <li>Brasil entre os 5 países que mais investem em tecnologia</li>
            <li>Energia 100% limpa no setor elétrico</li>
            <li>Educação pública com média IDEB acima de 6,5</li>
          </ul>
        </section>

        <section className="py-10 bg-gray-100 text-center">
          <h2 className="text-xl font-semibold mb-3">Apoio Popular</h2>
          <p className="text-lg mb-4">
            Mais de{" "}
            <span className="font-bold text-blue-700">
              {apoios.toLocaleString()}
            </span>{" "}
            brasileiros já acreditam nesse plano.
          </p>
          <button
            onClick={() => setApoios((n) => n + 1)}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Quero me engajar
          </button>
        </section>

        <footer className="bg-blue-900 text-white py-6 text-center text-sm">
          © 2025 - Brasil 2030. Movimento independente, baseado em dados reais.
          Fontes: IBGE, Tesouro Nacional, OCDE, INEP.
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
