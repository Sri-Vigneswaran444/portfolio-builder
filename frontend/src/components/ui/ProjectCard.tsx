import { motion } from "framer-motion";
import { FaRegFolderOpen, FaArrowUpRightFromSquare } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  technologies: string[];
  highlights: string[];
  link?: string;
}

export default function ProjectCard({ title, technologies, highlights, link }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900/60"
    >
      {/* Outer Glow Effect on Hover */}
      <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        {/* Top bar with folder icon & link icon */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-colors">
            <FaRegFolderOpen className="text-2xl" />
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <FaArrowUpRightFromSquare className="text-lg" />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Highlights list */}
        <ul className="mb-6 space-y-2 text-sm text-zinc-400">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 group-hover:bg-blue-500/10 group-hover:text-blue-300 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
