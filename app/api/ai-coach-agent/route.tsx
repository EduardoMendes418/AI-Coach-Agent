import { inngest } from "@/inngest/client";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json();
    
    if (!userInput) {
      return NextResponse.json(
        { error: "userInput is required" },
        { status: 400 }
      );
    }

    const resultIds = await inngest.send({
      name: 'AiCoachAgent',
      data: {
        userInput: userInput,
      },
    });

    const runId = resultIds?.ids?.[0];
    if (!runId) {
      return NextResponse.json(
        { error: "Failed to get run ID" },
        { status: 500 }
      );
    }

    let runStatus;
    let attempts = 0;
    const maxAttempts = 20; 

    while (attempts < maxAttempts) {
      runStatus = await getRuns(runId);
      
      if (runStatus?.data?.[0]?.status === "Completed") {
        const output = runStatus.data[0].output?.output?.[0];
        if (output) {
          return NextResponse.json(output);
        }
        return NextResponse.json(
          { error: "No output found" },
          { status: 500 }
        );
      }

      await new Promise(resolve => setTimeout(resolve, 500));
      attempts++;
    }

    return NextResponse.json(
      { error: "Timeout waiting for run to complete" },
      { status: 408 }
    );
  } catch (error) {
    console.error("Error in AI Coach Agent:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function getRuns(runId: string) {
  try {
    if (!runId) {
      throw new Error("runId is required");
    }

    const response = await axios.get(
      `${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`,
      {
        headers: {
          Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching runs:", error);
    return null;
  }
}