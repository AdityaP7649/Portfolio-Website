import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Briefcase,
  ExternalLink,
  Download,
  Monitor,
  Server,
  Brain,
  FileText,
  Link2,
} from "lucide-react";
import { FlipWords } from "../../components/ui/flip-words";
import { Spotlight } from "../../components/ui/spotlight";
import { LayoutGrid } from "../../components/ui/layout-grid";
import ProfilePic from "../../assets/profile-pic.jpeg";
import "./About.css";

function About() {
  const cards = [
    {
      id: 1,
      thumbnail: ProfilePic,
      className: "md:col-span-2 md:row-span-2",
      content: (
        <div className="text-white">
          <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Red Hat Display', sans-serif" }}>
            About Me
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            I build scalable, accessible, and production-grade web experiences
            across the full stack. Started in Electronics & Telecommunication
            Engineering, but curiosity led me into software — and I haven't
            looked back. I'm passionate about where software engineering meets
            AI, using LLMs to improve developer workflows and create tools
            people genuinely rely on.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Frontend",
      icon: <Monitor size={32} />,
      bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      iconColor: "rgba(255,255,255,0.8)",
      className: "",
      content: (
        <div className="text-white">
          <p className="text-lg font-bold mb-2">Frontend</p>
          <ul className="text-sm opacity-90 space-y-1 list-disc list-inside">
            <li>React & Component Architecture</li>
            <li>UI/UX Implementation</li>
            <li>Performance & Accessibility</li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "Backend",
      icon: <Server size={32} />,
      bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
      iconColor: "rgba(255,255,255,0.8)",
      className: "",
      content: (
        <div className="text-white">
          <p className="text-lg font-bold mb-2">Backend</p>
          <ul className="text-sm opacity-90 space-y-1 list-disc list-inside">
            <li>RESTful API Design</li>
            <li>Database Management</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>
      ),
    },
    {
      id: 4,
      title: "AI & Intelligence",
      icon: <Brain size={32} />,
      bg: "linear-gradient(135deg, #0d1b2a, #1b2838, #2a4058)",
      iconColor: "rgba(255,255,255,0.8)",
      className: "md:col-span-2",
      content: (
        <div className="text-white">
          <p className="text-lg font-bold mb-2">AI & Intelligence</p>
          <ul className="text-sm opacity-90 space-y-1 list-disc list-inside">
            <li>LLM Application Development</li>
            <li>RAG Pipelines & Workflows</li>
            <li>Enterprise Deployments</li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title: "Resume",
      icon: <FileText size={32} />,
      bg: "linear-gradient(135deg, #141e30, #243b55)",
      iconColor: "rgba(255,255,255,0.8)",
      className: "",
      content: (
        <div className="text-white space-y-3">
          <p className="text-lg font-bold">Resume</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100 underline"
            >
              <ExternalLink size={14} /> View Resume
            </a>
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100 underline"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 6,
      title: "Connect",
      icon: <Link2 size={32} />,
      bg: "linear-gradient(135deg, #1a1a2e, #2d2d44)",
      iconColor: "rgba(255,255,255,0.8)",
      className: "md:col-span-2",
      content: (
        <div className="text-white space-y-3">
          <p className="text-lg font-bold">Connect</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://www.linkedin.com/in/aditya-patil-596413223/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 underline">LinkedIn</a>
            <a href="https://github.com/AdityaPatil22" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 underline">GitHub</a>
            <a href="https://leetcode.com/u/aditya1592/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 underline">LeetCode</a>
            <a href="mailto:adityapatil7649@gmail.com" className="opacity-90 hover:opacity-100 underline">adityapatil7649@gmail.com</a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="about-section" id="about">
      {/* Hero intro */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero-inner">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
          <div className="intro-dot-grid" />
          <div className="hero-content">
            <span className="intro-label">// about</span>
            <motion.h2
              className="intro-name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Aditya Patil
            </motion.h2>
            <p className="intro-role">
              <FlipWords
                words={["Full Stack Developer", "AI Enthusiast", "Open Source Contributor"]}
                duration={3000}
              />
            </p>
            <div className="intro-meta">
              <span className="intro-meta-item">
                <MapPin size={14} /> India
              </span>
              <span className="intro-meta-item">
                <Briefcase size={14} /> Associate Software Engineer
              </span>
              <span className="intro-meta-item">
                <Mail size={14} /> adityapatil7649@gmail.com
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Layout Grid */}
      <div className="about-grid-wrapper">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

export default About;
