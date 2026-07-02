import { motion } from "framer-motion";
import { FaRegQuestionCircle } from "react-icons/fa";

interface Props {
  onSelect: (question: string) => void;
}

const questions = [
  "Tell me about yourself",
  "What projects have you built?",
  "Tell me about your internship",
  "Why should we hire you?",
  "What are your future goals?",
  "Explain your RAG project",
];

export default function SuggestedQuestions({ onSelect }: Props) {
  return (
    <div className="mt-8 flex flex-col items-center">
      <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
        <FaRegQuestionCircle className="text-sm" /> Suggested Prompts
      </span>
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {questions.map((question, idx) => (
          <motion.button
            key={question}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(question)}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2.5 text-xs md:text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            {question}
          </motion.button>
        ))}
      </div>
    </div>
  );
}