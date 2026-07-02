import { useEffect, useRef } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import SuggestedQuestions from "./SuggestedQuestions";
import useChat from "../../hooks/useChat";
import { FaRobot, FaCircle } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBox() {
  const { messages, loading, send } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <section id="ai-copilot" className="mx-auto max-w-4xl px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4"
        >
          Sri's AI Assistant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto"
        >
          Ask the AI agent anything about my background, internship, projects, or technical skills.
        </motion.p>
      </div>

      {/* Futuristic Chat Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col h-[600px]"
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <FaRobot className="text-sm" />
            </div>
            <div>
              <span className="text-xs font-semibold text-zinc-300 block leading-tight">Sri-AI-Copilot</span>
              <span className="text-[10px] text-zinc-500 font-mono">v1.0.0 (RAG-ChromaDB)</span>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-zinc-900/60 px-3 py-1 border border-zinc-800/40">
            <FaCircle className="text-[8px] text-green-500 animate-pulse" />
            <span className="text-[10px] font-medium text-zinc-400">Online</span>
          </div>
        </div>

        {/* Scrollable Message Box */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <AnimatePresence initial={false}>
            {messages.length === 0 ? (
              /* Welcome Interface if empty */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center px-4"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-3xl shadow-xl shadow-blue-500/10 mb-6">
                  <FaRobot />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">How can I help you today?</h3>
                <p className="text-sm text-zinc-400 max-w-sm mb-4 leading-relaxed">
                  I can analyze Sri Vigneswaran's resume, describe his internship responsibilities, explain the models he built, or summarize his career goals.
                </p>
              </motion.div>
            ) : (
              messages.map((message) => (
                <Message key={message.id} message={message} />
              ))
            )}
          </AnimatePresence>

          {loading && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-zinc-900 bg-zinc-950/80 flex flex-col gap-3">
          <ChatInput onSend={send} disabled={loading} />
        </div>
      </motion.div>

      {/* Suggested Questions Section */}
      <SuggestedQuestions onSelect={send} />
    </section>
  );
}