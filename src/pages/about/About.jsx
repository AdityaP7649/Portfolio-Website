import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase, ExternalLink, Download } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "../../components/ui/3d-card";
import SplitText from "../../components/SplitText";
import "./About.css";

const cardReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, margin: "-50px" },
});

function About() {
  const capabilities = [
    {
      title: "Frontend",
      items: [
        "React & Component Architecture",
        "UI/UX Implementation",
        "Performance & Accessibility",
      ],
    },
    {
      title: "Backend",
      items: [
        "RESTful API Design",
        "Database Management",
        "Cloud & DevOps",
      ],
    },
    {
      title: "AI & Intelligence",
      items: [
        "LLM Application Development",
        "RAG Pipelines & Workflows",
        "Enterprise Deployments",
      ],
    },
  ];

  const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-patil-596413223/" },
    { label: "GitHub", href: "https://github.com/AdityaPatil22" },
    { label: "LeetCode", href: "https://leetcode.com/u/aditya1592/" },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-bento">

        {/* Intro Card — dark, 3D tilt */}
        <motion.div className="bento-intro" {...cardReveal(0)}>
          <CardContainer containerClassName="intro-card-container">
            <CardBody className="intro-card-body w-full">
              <div className="intro-dot-grid" />
              <CardItem translateZ={40} className="w-full">
                <span className="intro-label">// about</span>
              </CardItem>
              <CardItem translateZ={60} className="w-full">
                <SplitText
                  text="Aditya Patil"
                  className="intro-name"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.2}
                  rootMargin="-50px"
                  tag="h2"
                />
              </CardItem>
              <CardItem translateZ={30} className="w-full">
                <p className="intro-role">Full Stack Developer & AI Enthusiast</p>
              </CardItem>
              <CardItem translateZ={20} className="w-full">
                <div className="intro-meta">
                  <span className="intro-meta-item">
                    <MapPin size={14} />
                    India
                  </span>
                  <span className="intro-meta-item">
                    <Briefcase size={14} />
                    Associate Software Engineer
                  </span>
                  <span className="intro-meta-item">
                    <Mail size={14} />
                    adityapatil7649@gmail.com
                  </span>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>

        {/* Bio Card — full width */}
        <motion.div className="bento-bio" {...cardReveal(0.15)}>
          <p className="bio-lead">
            I build scalable, accessible, and production-grade web experiences
            across the full stack.
          </p>
          <p className="bio-body">
            I started in Electronics &amp; Telecommunication Engineering, but curiosity
            led me into software engineering and I haven't looked back since.
          </p>
          <p className="bio-body">
            I'm passionate about building products that solve real problems,
            especially where software engineering meets AI. What excites me most is
            using LLMs to improve developer workflows and create tools people
            genuinely rely on — not just impressive demos.
          </p>
          <p className="bio-body">
            I enjoy learning by building, contributing to open source, and sharing
            what I learn through technical talks and writing. I'm always exploring
            new technologies, challenging myself, and looking for opportunities to
            create meaningful developer experiences.
          </p>
          <p className="bio-body">
            Always happy to connect with people building in AI, developer tools,
            and open source.
          </p>
        </motion.div>

        {/* Capability Cards */}
        {capabilities.map((group, i) => (
          <motion.div
            key={group.title}
            className={`bento-cap bento-cap-${i + 1}`}
            {...cardReveal(0.25 + i * 0.1)}
          >
            <h3 className="cap-title">{group.title}</h3>
            <ul className="cap-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Resume Card */}
        <motion.div className="bento-resume" {...cardReveal(0.5)}>
          <span className="connect-label">// resume</span>
          <div className="resume-buttons">
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn-about primary"
            >
              <ExternalLink size={14} />
              View Resume
            </a>
            <a
              href="https://aditya-patil-resume.my.canva.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn-about secondary"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </motion.div>

        {/* Connect Card */}
        <motion.div className="bento-connect" {...cardReveal(0.6)}>
          <span className="connect-label">// connect</span>
          <div className="connect-links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-link"
              >
                {s.label}
                <ExternalLink size={13} />
              </a>
            ))}
            <a href="mailto:adityapatil7649@gmail.com" className="connect-link">
              <Mail size={14} />
              adityapatil7649@gmail.com
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
