import React from "react";

const questionList = [
  "Quais habilidades eu preciso para uma função de analista de dados ?",
  "Como faço para mudar de carreira para design de UX ?",
];

function EmptyState({selectedQuestion}: any) {
  return (
    <div>
      <h2 className="font-bold text-xl text-center">
        Pergunte qualquer coisa ao Agente de Carreira de IA
      </h2>
      <div>
        {questionList.map((question, index) => (
          <h2
            className="p-4 text-center border rounded-lg my-3 hover:border-primary cursor-pointer"
            key={index}
            onClick={() => selectedQuestion(question)}
          >
            {question}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default EmptyState;
