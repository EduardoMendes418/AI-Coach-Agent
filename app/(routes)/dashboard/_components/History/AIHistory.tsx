"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

function AIHistory() {
  const [userHistory, setUserHistory] = useState([]);

  return (
    <div className="mt-5 p-5 border rounden-xl">
      <h2 className="font-bold text-lg">História anterior</h2>
      <p>No que você trabalhou anteriormente.</p>

      {userHistory?.length == 0 && (
        <div className="flex items-center justify-center flex-col mt-6">
          <Image src={"/idea.png"} alt="idea" width={50} height={50} />
          <h2>Você não tem nenhuma história</h2>
          <Button className="mt-5">Explore as ferramentas</Button>
        </div>
      )}
    </div>
  );
}

export default AIHistory;
