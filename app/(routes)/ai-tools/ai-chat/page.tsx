"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import EmptyState from "./_components/Empty/EmptyState";

function AIChat() {
  const [useInput, setUserInput] = useState<string>();

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48">
      <div className="flex items-center justify-between gap-8">
        <div>
          <h2 className="font-bold text-lg">
            Bate-papo de perguntas e respostas sobre carreira em IA
          </h2>
          <p> Decisões de carreira mais inteligentes começam aqui</p>
        </div>
        <Button>+ New Chat</Button>
      </div>
      <div className="flex flex-col h-[75vh]">
        <div className="mt-5">
          <EmptyState
            selectedQuestion={(question: string) => setUserInput(question)}
          />
        </div>
        <div className="flex-1">{/*Message List */}</div>
        <div className="flex justify-between items-center gap-6">
          <Input
            placeholder="Type here"
            value={useInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
