import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaRobot } from "react-icons/fa6";

const TECHNICAL_SPECIALTIES = [
  "Large Language Models",
  "Retrieval-Augmented Generation (RAG)",
  "Autonomous AI Agents",
  "Enterprise GenAI Applications",
  "OCR & Document Intelligence",
  "MLOps & Prompt Engineering",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TECHNICAL_SPECIALTIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center overflow-hidden"
    >
      {/* Background radial overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090b_80%)]" />

      {/* Decorative Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />

      {/* Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400"
      >
        <span className="h-2 w-2 rounded-full bg-blue-400 animate-ping" />
        AI Engineer Portfolio
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-4 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Hello, I'm <br />
        <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent">
          Sri Vigneswaran K
        </span>
      </motion.h1>

      {/* Rotating Specialty Subtitle */}
      <div className="h-14 mb-8 flex items-center justify-center">
        <span className="text-zinc-500 text-lg md:text-2xl mr-2.5 font-medium">Specializing in</span>
        <div className="relative h-full overflow-hidden flex items-center w-[280px] sm:w-[400px] md:w-[480px] justify-start text-left">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute text-lg md:text-2xl font-bold text-blue-400"
            >
              {TECHNICAL_SPECIALTIES[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Narrative Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl text-zinc-400 leading-relaxed text-base md:text-lg mb-10"
      >
        I design and build enterprise-grade Generative AI pipelines, ReAct agents, and custom MLOps solutions that turn unstructured data into actionable intelligence.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4 justify-center"
      >
        <a
          href="#ai-copilot"
          className="group flex items-center gap-2.5 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-350 hover:bg-blue-500 hover:scale-105 active:scale-98"
        >
          <FaRobot className="text-base" />
          Talk to My AI Assistant
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#projects"
          className="rounded-2xl border border-zinc-800 bg-zinc-900/30 px-7 py-4 text-sm font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:text-white"
        >
          Explore Projects
        </a>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase cursor-pointer hover:text-zinc-300 transition-colors"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span>Scroll down</span>
        <FaArrowDown className="text-sm animate-bounce" />
      </motion.div>
    </section>
  );
}