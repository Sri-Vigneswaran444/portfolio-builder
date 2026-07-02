import { useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { IoSend } from "react-icons/io5";

interface ChatInputProps {
  onSend: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChatInput({ onSend, placeholder = "Ask me anything about my work...", disabled = false }: ChatInputProps) {
  const [text, setText] = useState("");

  function handleSubmit(e?: FormEvent) {
    if (e) e.preventDefault();
    if (!text.trim() || disabled) return;
    onSend(text);
    setText("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <div className="relative flex items-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-1.5 focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/30 transition-all duration-300">
        <input
          type="text"
          disabled={disabled}
          className="w-full bg-transparent py-3.5 pl-5 pr-14 text-white placeholder-zinc-500 outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm md:text-base"
          placeholder={disabled ? "AI is typing..." : placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          disabled={!text.trim() || disabled}
          className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white transition-all duration-300 hover:bg-blue-500 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-600 disabled:scale-100"
        >
          <IoSend className="text-lg" />
        </button>
      </div>
    </form>
  );
}
