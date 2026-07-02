import { useState } from "react";
import { askAI } from "../services/api";
import type { ChatMessage } from "../types/chat";

export default function useChat() {

  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const [loading, setLoading] = useState(false);

  async function send(question: string) {

    if (!question.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: question,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await askAI(question);

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: response.answer,
        timestamp: new Date(),
        sources: response.sources ?? [],
      };

      setMessages((prev) => [...prev, assistantMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry, something went wrong while contacting the AI.",
          timestamp: new Date(),
        },
      ]);

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  return {
    messages,
    loading,
    send,
  };
}