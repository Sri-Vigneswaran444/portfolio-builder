import Background from "../components/layout/background";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Footer from "../components/layout/Footer";
import StoryHub from "../components/ui/StoryHub";
import ProjectCard from "../components/ui/ProjectCard";
import Timeline from "../components/ui/Timeline";
import ChatBox from "../components/chat/ChatBox";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaCircleCheck,
  FaAward,
  FaLinkedin,
  FaBrain,
  FaCode,
  FaDatabase,
  FaChartColumn,
  FaGear
} from "react-icons/fa6";

const PROJECTS = [
  {
    title: "Autonomous AI Agent with Tool Use",
    technologies: ["LangChain", "OpenAI API", "Serper API", "Python", "ReAct"],
    highlights: [
      "Built a ReAct AI Agent capable of multi-step reasoning.",
      "Enabled dynamic web search, calculator, and code execution tools.",
      "Structured tool calling to ensure robust parameters parsing.",
      "Engineered flexible system prompts to prevent agent looping."
    ]
  },
  {
    title: "AI-Powered Abusive Comment Detector",
    technologies: ["Python", "BERT", "Transformers", "NLP", "Scikit-learn", "Flask"],
    highlights: [
      "Fine-tuned a BERT sequence classifier on multi-class toxic comments.",
      "Achieved an F1 score of over 91% for content moderation.",
      "Built a RESTful Flask inference API for real-time predictions.",
      "Integrated LIME (Local Interpretable Model-agnostic Explanations) for model explainability."
    ]
  },
  {
    title: "Customer Insight NLP Dashboard",
    technologies: ["spaCy", "Pandas", "Power BI", "REST API", "NLP"],
    highlights: [
      "Extracted sentiment trends and customer feedback themes using NLP.",
      "Implemented Named Entity Recognition (NER) for brand & product mentions.",
      "Created an interactive business dashboard with automated data pipelines.",
      "Allowed stakeholders to drill down into sentiment segments."
    ]
  }
];

const EXPERIENCE_ITEMS = [
  {
    title: "AI Engineer Intern (GenAI & LLM)",
    subtitle: "Sierra Digital Inc.",
    duration: "June 2024 – December 2024",
    badge: "Coimbatore, India",
    bullets: [
      "Built autonomous AI Agent workflows using LangChain and OpenAI GPT models.",
      "Developed enterprise Retrieval-Augmented Generation (RAG) pipelines for secure documentation query.",
      "Implemented OCR + LLM pipelines for high-accuracy document intelligence and metadata extraction.",
      "Designed prompt engineering strategies to reduce model hallucinations and improve structure.",
      "Reduced business analyst query time by ~30% and manual reporting effort by ~20%.",
      "Processed over 10,000 client records and 50+ enterprise documents.",
      "Built 3+ KPI dashboards using SAP Analytics Cloud for data visualization."
    ]
  }
];

const EDUCATION_ITEMS = [
  {
    title: "M.Tech in Computer Science & Engineering",
    subtitle: "Sri Ramakrishna Engineering College",
    duration: "2021 – 2026",
    badge: "CGPA: 7.08 / 10.0",
    bullets: [
      "Specialized in Artificial Intelligence, Machine Learning, Natural Language Processing, and Data Engineering.",
      "Gained hands-on experience in software engineering principles, algorithms, and database design."
    ]
  },
  {
    title: "Higher Secondary School",
    subtitle: "Sri Ramakrishna Matriculation Higher Secondary School",
    duration: "Graduated 2021",
    badge: "Score: 81.2%",
    bullets: [
      "Completed higher secondary board exams focusing on Computer Science, Mathematics, Physics, and Chemistry."
    ]
  }
];

const SKILL_CATEGORIES = [
  {
    title: "Artificial Intelligence",
    icon: <FaBrain className="text-blue-400" />,
    skills: ["Large Language Models", "Prompt Engineering", "RAG Pipelines", "AI Agents", "OpenAI API", "LangChain", "LLM Fine-tuning"]
  },
  {
    title: "Machine Learning & NLP",
    icon: <FaCode className="text-purple-400" />,
    skills: ["BERT Classifier", "Scikit-learn", "Natural Language Processing", "OCR Engines", "spaCy", "Sentiment Analysis"]
  },
  {
    title: "Programming & Backend",
    icon: <FaGear className="text-indigo-400" />,
    skills: ["Python", "SQL", "Java (Basic)", "Flask APIs", "FastAPI (Backend)"]
  },
  {
    title: "Data Analytics & Platforms",
    icon: <FaDatabase className="text-cyan-400" />,
    skills: ["Pandas & NumPy", "Data Cleaning & Prep", "Metadata Management", "SAP Datasphere", "SAP S/4HANA"]
  },
  {
    title: "Business Intelligence",
    icon: <FaChartColumn className="text-emerald-400" />,
    skills: ["Power BI dashboards", "SAP Analytics Cloud", "KPI Visualizations"]
  }
];

const CERTIFICATIONS = [
  "NLP Specialization — Coursera (DeepLearning.AI)",
  "Data Analytics Virtual Experience — Deloitte (Forage)",
  "Getting Started with Power BI — Microsoft",
  "Introduction to End-to-End Data Analysis — Microsoft",
  "Discover Data Analysis — Microsoft"
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      {/* Background with Grid & Ambient glows */}
      <Background />

      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 md:px-12 py-24 scroll-mt-20">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
            The Career Narrative
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            Discover the motivations, experiences, and future vision driving Sri's AI engineering career.
          </p>
        </motion.div>
        <StoryHub />
      </section>

      {/* Skills Matrix Section */}
      <section id="skills" className="mx-auto max-w-7xl px-6 md:px-12 py-24 border-t border-zinc-900/60 bg-zinc-950/20 scroll-mt-20">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Technical Skill Matrix
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            A comprehensive breakdown of enterprise technical expertise and core engineering tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur-md hover:border-zinc-700/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3.5 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 rounded-lg bg-zinc-900/50 px-3 py-1.5 text-xs text-zinc-300 border border-zinc-800/80 hover:bg-zinc-850 hover:text-white transition-colors"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 md:px-12 py-24 border-t border-zinc-900/60 scroll-mt-20">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
            AI & NLP Showcase
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            Practical deployment of Large Language Models, BERT classifers, and automated analytics dashboards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              technologies={proj.technologies}
              highlights={proj.highlights}
            />
          ))}
        </div>
      </section>

      {/* Experience & Education Timeline Section */}
      <section id="timeline" className="mx-auto max-w-7xl px-6 md:px-12 py-24 border-t border-zinc-900/60 bg-zinc-950/20 scroll-mt-20">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Professional Timeline
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            Education history, certificates, and professional internship accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8 pl-4 border-l-4 border-blue-500">
              Work Experience
            </h3>
            <Timeline items={EXPERIENCE_ITEMS} />
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-black text-white mb-8 pl-4 border-l-4 border-purple-500">
              Education
            </h3>
            <Timeline items={EDUCATION_ITEMS} />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-24 border-t border-zinc-900/60 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
              Credentials & Certifications
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base">
              Continuous upskilling through specialized programs in Natural Language Processing, data systems, and business intelligence models.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-3.5 rounded-2xl border border-zinc-800/80 bg-zinc-900/10 p-5 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <FaAward className="text-xl" />
                </div>
                <span className="text-sm font-medium text-zinc-300 leading-tight">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive AI Agent Section */}
      <section className="border-t border-zinc-900/60 bg-zinc-950/20">
        <ChatBox />
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl px-6 md:px-12 py-24 border-t border-zinc-900/60 scroll-mt-20">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">
            Open to AI Engineer, Machine Learning, and enterprise LLM application roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 md:p-12 backdrop-blur-md flex flex-col md:flex-row gap-10 items-center justify-between"
        >
          {/* Details */}
          <div className="space-y-6 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400">
                <FaEnvelope className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Email Me</span>
                <a href="mailto:vickykrishnaraj.444@gmail.com" className="text-white hover:text-blue-400 transition-colors font-medium">
                  vickykrishnaraj.444@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-purple-400">
                <FaPhone className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Call Me</span>
                <a href="tel:+919597748874" className="text-white hover:text-blue-400 transition-colors font-medium">
                  +91 9597748874
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-indigo-400">
                <FaLocationDot className="text-lg" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-semibold uppercase tracking-wider block">Location</span>
                <span className="text-zinc-300 font-medium">Coimbatore, India</span>
              </div>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="w-full md:w-auto flex flex-col gap-4 self-stretch md:self-center justify-center">
            <div className="rounded-2xl bg-zinc-950/60 border border-zinc-800 p-5 flex items-start gap-3">
              <FaCircleCheck className="text-green-400 text-xl shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-bold text-white block">Immediate Placement</span>
                <span className="text-xs text-zinc-400">Open to GenAI & ML opportunities.</span>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/sri-vigneswaran-k-845411303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition-all duration-350 hover:bg-blue-500 hover:scale-[1.02]"
            >
              <FaLinkedin className="text-lg" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}