import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileArrowDown, FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#timeline" },
    { name: "AI Assistant", href: "#ai-copilot" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Name / Logo */}
        <a href="#hero" className="group flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
          <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Sri Vigneswaran
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 rounded-full border border-zinc-800/60 bg-zinc-900/30 px-6 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Sri_Vigneswaran_Resume.pdf"
              className="flex items-center gap-2 rounded-xl bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <FaFileArrowDown />
              Resume
            </a>

            <div className="h-4 w-px bg-zinc-800" />

            <a
              href="https://github.com/Sri-Vigneswaran444"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-zinc-400 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sri-vigneswaran-k-845411303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl text-zinc-300 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-zinc-950 border-b border-zinc-800 py-6 px-6 flex flex-col gap-6 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-px bg-zinc-800" />

          <div className="flex items-center justify-between">
            <a
              href="/resume.pdf"
              download="Sri_Vigneswaran_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl bg-blue-600/10 px-4 py-2.5 text-sm font-semibold text-blue-400 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaFileArrowDown />
              Resume
            </a>

            <div className="flex gap-6">
              <a
                href="https://github.com/Sri-Vigneswaran444"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-zinc-400 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sri-vigneswaran-k-845411303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-zinc-400 hover:text-blue-500"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}