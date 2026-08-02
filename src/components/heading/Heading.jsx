import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import "./Heading.css";

function Heading({ title }) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="section-heading"
      >
        {title}
      </motion.h1>
    </LampContainer>
  );
}

export default Heading;
