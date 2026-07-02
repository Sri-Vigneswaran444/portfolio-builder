export interface Source {
  title: string;
  page?: number;
  score?: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  sources?: Source[];
}

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
  sources?: Source[];
}