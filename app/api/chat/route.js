import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
if (!apiKey) throw new Error("Missing GOOGLE_GEMINI_API_KEY");

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req) {
  try {
    const { messages } = await req.json();
    
    if (!messages?.length) {
      return NextResponse.json(
        { error: "No messages provided" }, 
        { status: 400 }
      );
    }

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "You are PathWayPro, an AI mentor for personalized career guidance. Your goal is to provide career advice, industry insights, and skill-building exercises to help students navigate job roles, refine interview skills, and master networking strategies. Keep responses professional yet engaging." }],
        },
        ...messages.map(msg => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        })),
      ],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });
    
    const lastMessage = messages[messages.length - 1].text;
    const result = await chat.sendMessage(lastMessage);
    const response = await result.response.text();

    return NextResponse.json({ 
      text: response,
      timestamp: new Date().toLocaleTimeString(),
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Failed to get response from Gemini" },
      { status: 500 }
    );
  }
}