import axios from "axios";
import type { ChatRequest, ChatResponse } from "../types/chat";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000,
});

export async function askAI(
  question: string
): Promise<ChatResponse> {
  const body: ChatRequest = {
    question,
  };

  const response = await api.post<ChatResponse>(
    "/chat",
    body
  );

  return response.data;
}