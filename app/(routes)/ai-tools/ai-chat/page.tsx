"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import EmptyState from "./_components/Empty/EmptyState";
import axios from "axios";

type messages = {
  content: string;
  role: string;
  type: string;
};

function AIChat() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<messages[]>([]);

  const onSend = async () => {
    setLoading(true);
    setMessageList((prev) => [
      ...prev,
      {
        content: userInput,
        role: "user",
        type: "text",
      },
    ]);
    const result = await axios.post("/api/ai-coach-agent", {
      userInput: userInput,
    });
    console.log(result.data);
    setMessageList((prev) => [...prev, result.data]);
    setLoading(false);
  };

  console.log(messageList);


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
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button onClick={onSend} disabled={loading}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
