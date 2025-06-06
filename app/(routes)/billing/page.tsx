import { PricingTable } from "@clerk/nextjs";
import React from "react";

function Billing() {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">Choose You Plan</h2>
      <p className="tect-lg text-center">Select a Subscription bunble to get all AI Tools Access</p>
      <div className="mt-6">
      <PricingTable/>
      </div>
    </div>
  );
}

export default Billing;
