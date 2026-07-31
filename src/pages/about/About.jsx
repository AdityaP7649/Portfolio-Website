import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";
import SplitText from "../../components/SplitText";
import "./About.css";

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

  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <span className="section-label">// about</span>

        <div className="about-header">
          <SplitText
            text="Aditya Patil"
            className="about-name"
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
          <p className="about-role">Full Stack Developer</p>
        </div>

        <motion.div
          className="about-meta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="meta-item">
            <MapPin size={14} />
            India
          </span>
          <span className="meta-divider">&middot;</span>
          <span className="meta-item">
            <Briefcase size={14} />
            Associate Software Engineer
          </span>
          <span className="meta-divider">&middot;</span>
          <a
            href="mailto:adityapatil7649@gmail.com"
            className="meta-item meta-link"
          >
            <Mail size={14} />
            adityapatil7649@gmail.com
          </a>
        </motion.div>

        <hr className="about-divider" />

        <motion.div
          className="about-bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="bio-intro">
            I build scalable, accessible, and production-grade web experiences
            across the full stack.
          </p>
          <p className="bio-body">
            I design and develop modern front-end interfaces, integrate robust
            back-end services, and collaborate closely with cross-functional
            teams to deliver reliable solutions. My experience spans
            JavaScript-driven ecosystems, component-based UI development, API
            integration, and containerized enterprise workflows.
          </p>
        </motion.div>

        <div className="capabilities-section">
          <span className="section-label">// capabilities</span>
          <div className="capabilities-grid">
            {capabilities.map((group, i) => (
              <motion.div
                key={group.title}
                className="capability-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="capability-title">{group.title}</h3>
                <ul className="capability-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-links">
          <span className="section-label">// connect</span>
          <motion.div
            className="links-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.linkedin.com/in/aditya-patil-596413223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="meta-divider">&middot;</span>
            <a
              href="https://github.com/AdityaPatil22"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="meta-divider">&middot;</span>
            <a
              href="https://leetcode.com/u/aditya1592/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
