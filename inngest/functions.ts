import { inngest } from "./client";
import { createAgent, openai } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);

export const AiCoachChatAgent = createAgent({
  name: "AiCoachChatAgent ",
  description:
    "Um agente de IA que responde a perguntas relacionadas à carreira",
  system:
    "Você é um agente de bate-papo profissional e prestativo do Ai Career Coach",
  model: openai({
    model: "gemini-2.0-flash",
    apiKey: process.env.GEMINI_API_Key,
  }),
});

export const AiCoachAgent = inngest.createFunction(
  { id: "AiCoachAgent" },
  { event: "AiCoachAgent" },
  async ({ event, step }) => {
    const { userInput } = await event?.data;
    const result = await AiCoachChatAgent.run(userInput);
    return result;
  }
);
