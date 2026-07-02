import { useState } from "react";
import type { ChatMessage } from "../../types/chat";
import { FaRobot, FaUser, FaRegCopy, FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

interface Props {
  message: ChatMessage;
}

export default function Message({ message }: Props) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex gap-4 w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      {/* AI Icon Avatar */}
      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-blue-400">
          <FaRobot className="text-lg" />
        </div>
      )}

      {/* Message Balloon */}
      <div
        className={`group relative max-w-[85%] md:max-w-2xl rounded-2xl px-6 py-4 shadow-xl border ${
          isUser
            ? "rounded-tr-none border-blue-500/30 bg-gradient-to-br from-blue-600 to-blue-700 text-white"
            : "rounded-tl-none border-zinc-800 bg-zinc-900/40 text-zinc-150 backdrop-blur-sm"
        }`}
      >
        {/* Text content with simple markdown or formatting spacing */}
        <div className="whitespace-pre-line text-sm md:text-base leading-relaxed break-words font-normal">
          {message.content}
        </div>

        {/* Copy button overlay for AI responses */}
        {!isUser && (
          <button
            onClick={handleCopy}
            className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 opacity-0 transition-all duration-350 hover:bg-zinc-800 hover:text-white group-hover:opacity-100 shadow-md"
            title="Copy answer"
          >
            {copied ? <FaCheck className="text-xs text-green-400" /> : <FaRegCopy className="text-xs" />}
          </button>
        )}
      </div>

      {/* User Icon Avatar */}
      {isUser && (
        <div className="flex h-10 w-10 shrink-0 select-none items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
          <FaUser className="text-sm" />
        </div>
      )}
    </motion.div>
  );
}