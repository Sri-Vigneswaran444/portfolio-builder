import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBrain, FaCompass, FaBriefcase, FaLightbulb } from "react-icons/fa6";

interface StorySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const STORY_SECTIONS: StorySection[] = [
  {
    id: "why-ai",
    title: "Why I Chose AI",
    icon: <FaBrain />,
    content: [
      "I chose Artificial Intelligence because I enjoy solving problems that traditional software cannot solve easily. During my academic journey, I became fascinated by how machines can understand language, analyze documents, and assist people in making decisions.",
      "As Generative AI and Large Language Models began transforming industries, I realized AI wasn't just another technology—it was changing how humans interact with software. That inspired me to specialize in LLMs, Retrieval-Augmented Generation (RAG), AI Agents, and enterprise AI solutions.",
      "Today, I enjoy building AI systems that can reason over information, automate complex workflows, and deliver meaningful business value."
    ]
  },
  {
    id: "journey",
    title: "My Career Journey",
    icon: <FaGraduationCap />,
    content: [
      "My journey began with an M.Tech in Computer Science at Sri Ramakrishna Engineering College, where I built a strong foundation in machine learning, NLP, and software engineering.",
      "During my internship at Sierra Digital, I had the opportunity to work on enterprise Generative AI applications. I developed AI Agent workflows, Retrieval-Augmented Generation (RAG) pipelines, OCR-powered document intelligence systems, prompt engineering solutions, and SAP GenAI applications.",
      "Outside my internship, I continuously challenged myself by building personal AI projects such as autonomous AI agents, NLP dashboards, and BERT-based text classification models. Every project helped me deepen my understanding of production AI systems."
    ]
  },
  {
    id: "challenges",
    title: "Challenges I Overcame",
    icon: <FaCompass />,
    content: [
      "One of the biggest challenges I faced was moving beyond academic machine learning projects to building real-world AI systems.",
      "Enterprise data is often messy, unstructured, and incomplete. Learning how to preprocess large datasets, design effective prompts, improve retrieval accuracy, and reduce hallucinations in LLM applications required significant experimentation and continuous learning.",
      "Another challenge was keeping pace with the rapidly evolving AI ecosystem. Instead of feeling overwhelmed, I embraced continuous learning by exploring new frameworks, reading documentation, building projects, and experimenting with the latest AI technologies."
    ]
  },
  {
    id: "why-hire",
    title: "Why Recruiters Should Hire Me",
    icon: <FaBriefcase />,
    content: [
      "I combine strong theoretical knowledge with practical experience in building production-oriented AI solutions.",
      "I have hands-on experience with: LLMs, RAG, AI Agents, LangChain, OpenAI APIs, Prompt Engineering, Vector Databases, Python, NLP, OCR, and SAP GenAI.",
      "Beyond writing code, I focus on solving business problems. I enjoy understanding requirements, designing scalable architectures, and building AI systems that deliver measurable impact.",
      "I learn quickly, adapt to new technologies, and genuinely enjoy tackling challenging problems. I'm eager to contribute to teams building the next generation of AI products."
    ]
  },
  {
    id: "goals",
    title: "My Future Goals",
    icon: <FaLightbulb />,
    content: [
      "My short-term goal is to become a highly skilled AI Engineer specializing in enterprise Generative AI systems.",
      "I want to deepen my expertise in Multi-Agent AI Systems, Advanced RAG Architectures, AI Infrastructure, MLOps, LLM Fine-tuning, AI Safety, and AI System Design.",
      "In the long term, I aspire to architect intelligent AI platforms that millions of people can use and eventually mentor other engineers entering the field."
    ]
  }
];

export default function StoryHub() {
  const [activeTab, setActiveTab] = useState("why-ai");

  const currentSection = STORY_SECTIONS.find((s) => s.id === activeTab) || STORY_SECTIONS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Navigation Tabs - Left Column */}
      <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
        {STORY_SECTIONS.map((section) => {
          const isActive = section.id === activeTab;
          return (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex items-center gap-3.5 px-6 py-4 rounded-2xl text-left font-medium transition-all duration-300 whitespace-nowrap lg:whitespace-normal shrink-0 lg:shrink-1 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-zinc-900/40 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/70 border border-zinc-800/80"
              }`}
            >
              <span className={`text-xl ${isActive ? "text-white" : "text-blue-400"}`}>
                {section.icon}
              </span>
              <span className="text-sm md:text-base">{section.title}</span>
            </button>
          );
        })}
      </div>

      {/* Narrative Card - Right Column */}
      <div className="lg:col-span-8 min-h-[320px] rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 md:p-10 backdrop-blur-md relative overflow-hidden flex flex-col justify-center">
        {/* Background glow behind text */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 relative z-10"
          >
            <h3 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
              <span className="text-blue-400">{currentSection.icon}</span>
              {currentSection.title}
            </h3>

            <div className="space-y-4 text-zinc-300 leading-relaxed text-base md:text-lg">
              {currentSection.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
