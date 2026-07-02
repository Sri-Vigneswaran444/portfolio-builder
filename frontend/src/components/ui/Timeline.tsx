import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  badge?: string;
  bullets?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-12 py-4">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-8 md:pl-10 group"
        >
          {/* Glowing Checkpoint Bullet */}
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-800 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

          {/* Item Content Card */}
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/50">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-sm font-semibold text-blue-400">
                  {item.duration}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-medium">
                  {item.subtitle}
                </p>
              </div>

              {item.badge && (
                <span className="self-start md:self-center rounded-full bg-zinc-800 px-3.5 py-1 text-xs font-semibold text-zinc-300 border border-zinc-700/50">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Bullets */}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="space-y-2 text-sm text-zinc-400">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
