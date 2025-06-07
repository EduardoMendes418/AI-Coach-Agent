import { PricingTable } from "@clerk/nextjs";
import React from "react";

function Billing() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">Escolha seu plano</h2>
      <p className="tect-lg text-center">Selecione um pacote de assinatura para obter acesso a todas as ferramentas de IA</p>
      <div className="mt-6">
      <PricingTable/>
      </div>
    </div>
  );
}

export default Billing;
