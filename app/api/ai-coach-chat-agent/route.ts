import { inngest } from "@/inngest/client";
import axios from "axios";

export async function POST(req: any) {
  const { userInput } = await req.json();

  const resultIds = await inngest.send({
    name: "AiCoachAgent",
    data: {
      userInput,
    },
  });
  const reunId = resultIds.ids[0];
}

async function getRuns(runId: string) {
  const result = await axios.get(
    process.env.INNGEST_SERVER_HOST + "/v1/events/" + { runId } + "/runs",
    {
      headers: {
        Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
      },
    });

    return result.data

}
