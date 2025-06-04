import { Button } from "@/components/ui/button";
import React from "react";

function WelcomeBanner() {
  return (
    <div className=" p-5 bg-gradient-to-tr from-[#BE575F] via-[#A33BE3] to-[#AC76D6] rounded-xl">
      <h2 className="font-bold text-2xl text-white">Agente com IA</h2>
      <p className="text-white">
        Decisões de carreira mais inteligentes começam aqui !
      </p>
      <Button variant={"outline"} className="mt-3">
        Vamos começar
      </Button>
    </div>
  );
}

export default WelcomeBanner;
