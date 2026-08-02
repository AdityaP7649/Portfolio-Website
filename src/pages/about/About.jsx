import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ExternalLink, Download } from "lucide-react";
import { FlipWords } from "../../components/ui/flip-words";
import { Spotlight } from "../../components/ui/spotlight";
import ProfilePic from "../../assets/profile-pic.jpeg";
import "./About.css";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, margin: "-50px" },
});

function About() {
  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-patil-596413223/" },
    { label: "GitHub", href: "https://github.com/AdityaPatil22" },
    { label: "LeetCode", href: "https://leetcode.com/u/aditya1592/" },
  ];

  return (
    <section className="about-section" id="about">
      {/* Hero */}
      <motion.div className="about-hero" {...reveal(0)}>
        <div className="hero-inner">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" />
          <div className="intro-dot-grid" />
          <div className="hero-content">
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
              <span className="intro-meta-item"><Briefcase size={14} /> Associate Software Engineer @ Red Hat</span>
              <span className="intro-meta-item"><MapPin size={14} /> India</span>
              <span className="intro-meta-item"><Mail size={14} /> adityapatil7649@gmail.com</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bento grid */}
      <div className="about-bento">
        {/* Photo */}
        <motion.div className="bento-photo" {...reveal(0.1)}>
          <img src={ProfilePic} alt="Aditya Patil" />
        </motion.div>

        {/* Bio */}
        <motion.div className="bento-bio" {...reveal(0.15)}>
          <p className="bio-lead">
            I build scalable, production-grade applications
            across the full stack.
          </p>
          <p className="bio-body">
            What began as an interest in technology evolved into a passion for software engineering. Today, I enjoy working at the intersection of software engineering and AI, using LLMs to improve developer workflows and build tools people genuinely rely on.
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div className="bento-cap" {...reveal(0.3)}>
          <h3 className="cap-title">AI Engineering</h3>
          <ul className="cap-list">
            <li>LLM Applications &amp; AI Agents</li>
            <li>RAG Pipelines &amp; AI Integrations</li>
            <li>Developer Tools &amp; Automation</li>
          </ul>
        </motion.div>

        <motion.div className="bento-cap" {...reveal(0.25)}>
          <h3 className="cap-title">Backend Engineering</h3>
          <ul className="cap-list">
            <li>FastAPI &amp; Node.js</li>
            <li>APIs &amp; MCP Servers</li>
            <li>Cloud, Docker &amp; OpenShift</li>
          </ul>
        </motion.div>

        <motion.div className="bento-cap" {...reveal(0.2)}>
          <h3 className="cap-title">Web Engineering</h3>
          <ul className="cap-list">
            <li>React , Vue &amp; Nuxt</li>
            <li>Modern UI Architecture</li>
            <li>Performance &amp; Accessibility</li>
          </ul>
        </motion.div>

        {/* Resume */}
        <motion.div className="bento-resume" {...reveal(0.35)}>
          <span className="section-label">// resume</span>
          <div className="resume-buttons">
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn primary"
            >
              <ExternalLink size={14} /> View Resume
            </a>
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn secondary"
            >
              <Download size={14} /> Download PDF
            </a>
          </div>
        </motion.div>

        {/* Connect */}
        <motion.div className="bento-connect" {...reveal(0.4)}>
          <span className="section-label">// connect</span>
          <div className="connect-links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                {s.label} <ExternalLink size={13} />
              </a>
            ))}
            <a href="mailto:adityapatil7649@gmail.com" className="connect-link">
              <Mail size={14} /> adityapatil7649@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
