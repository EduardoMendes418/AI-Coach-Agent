import React from "react";
import AIToolsCard from "./AIToolsCard";

const aiToolsList = [
  {
    name: "Bate-papo de perguntas e respostas sobre IA",
    desc: "Converse com AI Agente",
    icon: "/chatbot.png",
    button: "Vamos conversar",
    path: "/ai-chat",
  },
  {
    name: "Verificador de currículos com IA",
    desc: "Melhore seu currículo",
    icon: "/resume.png",
    button: "Analise agora",
    path: "/ai-resume-analyzer",
  },
  {
    name: "Gerador de Roteiro de Carreira",
    desc: "Construa seu roteiro",
    icon: "/roadmap.png",
    button: "Gerar agora",
    path: "/career-roadmap-generator",
  },
  {
    name: "Gerador de cartas de apresentação",
    desc: "Escreva uma carta de apresentação",
    icon: "/cover.png",
    button: "Crie agora",
    path: "/cover-letter-generator",
  },
];

function AITools() {
  return (
    <div className="mt-7 p-5 bg-white border rounded-xl">
      <h2 className="font-bold text-lg">Ferramentas de IA</h2>
      <p>Comece a construir e moldar sua carreira com grande sucesso !</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mt-4">
        {aiToolsList.map((tool: any, index) => (
          <AIToolsCard tool={tool} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AITools;
