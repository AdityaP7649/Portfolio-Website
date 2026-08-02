import { motion } from "framer-motion";
import { GitPullRequest, Mic, PenLine, ExternalLink } from "lucide-react";
import Heading from "../../components/heading/Heading";
import "./Achievements.css";

const cardReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut", delay },
  viewport: { once: true, margin: "-50px" },
});

const contributions = [
  {
    project: "feast-dev/feast",
    description: "Fixed UI not displaying newly created projects with SQL registry — replaced static file with dynamic API route",
    href: "https://github.com/feast-dev/feast/pull/6657",
  },
  {
    project: "feast-dev/feast",
    description: "Reported UI home page showing global counts across all projects instead of filtered project",
    href: "https://github.com/feast-dev/feast/issues/6651",
  },
  {
    project: "feast-dev/feast",
    description: "Fixed Helm chart deployment failure — corrected feature-server image reference from non-existent Java image to Python",
    href: "https://github.com/feast-dev/feast/pull/6607",
  },
];

const talks = [
  {
    title: "It Was Fast on My Machine: What Production Reveals About Web Performance",
    event: "DevConf.cz 2026",
    description: "Why apps that fly locally crawl in production — caching, CDNs, HTTP headers, and designing for predictable scale",
    href: "https://pretalx.devconf.info/devconf-cz-2026/talk/review/9WKRL8SJYXMZPRMJLEEAWVMVGWGBDXT8",
  },
  {
    title: "Unpacking the Llama Stack: Architecting Next-Gen AI Applications",
    event: "DevConf.in 2026",
    description: "Exploring the Llama Stack's modular architecture for building, deploying, and scaling LLM-powered applications",
    href: "https://pretalx.devconf.info/devconf-in-2026/talk/review/DN7C8K9PL3EW8FEANC7WXURTCPEF8B9C",
  },
  {
    title: "Fedora as a Developer Workstation: A 6-Month Field Report",
    event: "Flock to Fedora 2026",
    description: "Honest field report on using Fedora as a full-time dev workstation — system updates, containers, and tooling",
    href: "https://cfp.fedoraproject.org/flock-to-fedora-2026/talk/review/3LRGCJXTLV3NLDXUGAJHGAZZKFYTX7WR",
  },
  {
    title: "Documentation as Infrastructure: Why Fedora Docs Matter More Than We Think",
    event: "Flock to Fedora 2026",
    description: "Why treating documentation as core infrastructure shapes contributor onboarding and long-term sustainability",
    href: "https://cfp.fedoraproject.org/flock-to-fedora-2026/talk/review/TZJAWJGQ3H7RTBLY7DCGBHXQXG9FV9BR",
  },
];

const blogs = [
  {
    title: "Two Conferences, Three Talks, One Unforgettable Journey",
    platform: "Medium",
    description: "Recounting the experience of speaking at two developer conferences with three talks",
    href: "https://medium.com/@adityapatil7649/two-conferences-three-talks-one-unforgettable-journey-cf37bd4981f0",
  },
  {
    title: "Unlocking the Power of Protocol Buffers (Protobuf)",
    platform: "Medium",
    description: "A deep dive into Protobuf as a modern serialization format",
    href: "https://medium.com/@adityapatil7649/unlocking-the-power-of-protocol-buffers-protobuf-a-modern-serialization-format-24ec35d540b4",
  },
  {
    title: "The First Time I Stepped Onto a Developer Conference Stage",
    platform: "Medium",
    description: "Lessons learned from giving my first tech talk",
    href: "https://medium.com/@adityapatil7649/my-first-tech-talk-taught-me-more-than-the-slides-ever-could-5fc4d87425be",
  },
  {
    title: "Why Building AI Systems Feels Messy — Until You Use Llama Stack",
    platform: "Medium",
    description: "Exploring how Llama Stack simplifies AI system development",
    href: "https://medium.com/@adityapatil7649/why-building-ai-systems-feels-messy-until-you-use-llama-stack-f1445139f7f4",
  },
  {
    title: "Battle of the Runtimes: Node.js vs Deno vs Bun",
    platform: "Medium",
    description: "Comparing the three major JavaScript runtimes",
    href: "https://medium.com/@adityapatil7649/battle-of-the-runtimes-node-js-vs-deno-vs-bun-a5f57256aa1d",
  },
];

const sections = [
  { label: "// open source", icon: GitPullRequest, items: contributions, key: "project" },
  { label: "// talks & conferences", icon: Mic, items: talks, key: "title" },
  { label: "// blog posts", icon: PenLine, items: blogs, key: "title" },
];

function Achievements() {
  return (
    <>
      <Heading title="Achievements" />
    <section className="achievements-section">
      <div className="achievements-grid">
        {sections.map((section, si) => (
          <motion.div
            key={section.label}
            className="achievements-group"
            {...cardReveal(0.1 + si * 0.15)}
          >
            <div className="achievements-group-header">
              <section.icon size={16} />
              <span className="achievements-label">{section.label}</span>
            </div>

            <div className="achievements-cards">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="achievement-card"
                  {...cardReveal(0.2 + si * 0.15 + i * 0.08)}
                >
                  <h3 className="achievement-title">
                    {item[section.key]}
                    {item.event && (
                      <span className="achievement-meta">{item.event}</span>
                    )}
                    {item.platform && (
                      <span className="achievement-meta">{item.platform}</span>
                    )}
                  </h3>
                  <p className="achievement-desc">{item.description}</p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-link"
                    >
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Achievements;
