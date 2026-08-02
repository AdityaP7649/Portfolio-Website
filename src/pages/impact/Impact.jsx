import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Heading from "../../components/heading/Heading";
import {
  metrics,
  featuredItems,
  talks,
  contributions,
  articles,
} from "./impactData";
import "./Impact.css";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, margin: "-50px" },
});

function SectionHeading({ title, subtitle }) {
  return (
    <motion.div className="impact-section-header" {...reveal()}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

function Impact() {
  return (
    <>
      <Heading title="Impact" />
      <section className="impact-page">
        <motion.p className="impact-subtitle" {...reveal(0.2)}>
          Sharing knowledge, contributing to open source, and helping build the developer community.
        </motion.p>

        <div className="impact-section">
          <SectionHeading title="Featured Impact" />
          <div className="impact-featured-grid">
            {featuredItems.map((f, i) => (
              <motion.div
                key={f.title}
                className="impact-featured-card"
                {...reveal(0.1 + i * 0.1)}
              >
                <span className="impact-featured-emoji">{f.emoji}</span>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="impact-section">
          <SectionHeading
            title="Conference Talks"
            subtitle="Sharing engineering lessons with the open-source community."
          />
          <div className="impact-grid-2">
            {talks.map((talk, i) => (
              <motion.div
                key={talk.title}
                className="impact-card"
                {...reveal(0.1 + i * 0.08)}
              >
                <span className="impact-badge">{talk.conference}</span>
                <h3 className="impact-card-title">{talk.title}</h3>
                <p className="impact-card-desc">{talk.description}</p>
                <a
                  href={talk.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="impact-btn"
                >
                  View Details <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="impact-section">
          <SectionHeading
            title="Open Source Contributions"
            subtitle="Improving developer tooling through community contributions."
          />
          <div className="impact-grid-3">
            {contributions.map((c, i) => (
              <motion.div
                key={c.title}
                className="impact-card"
                {...reveal(0.1 + i * 0.1)}
              >
                <span className="impact-badge impact-badge-accent">
                  <Github size={12} /> {c.repo}
                </span>
                <h3 className="impact-card-title">{c.title}</h3>
                <p className="impact-card-desc">{c.description}</p>
                <div className="impact-card-footer">
                  <div className="impact-tags">
                    {c.tags.map((tag) => (
                      <span key={tag} className="impact-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="impact-btn"
                  >
                    {c.linkLabel} <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="impact-section">
          <SectionHeading
            title="Technical Writing"
            subtitle="Sharing lessons learned through articles and tutorials."
          />
          <div className="impact-grid-2">
            {articles.map((a, i) => (
              <motion.div
                key={a.title}
                className="impact-card"
                {...reveal(0.1 + i * 0.08)}
              >
                <span className="impact-badge">{a.platform}</span>
                <h3 className="impact-card-title">{a.title}</h3>
                <p className="impact-card-desc">{a.description}</p>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="impact-btn"
                >
                  Read Article <ExternalLink size={12} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Impact;
