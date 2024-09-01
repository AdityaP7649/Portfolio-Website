import { motion } from "framer-motion";
import Heading from "../../components/heading/Heading";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div id="resume">
        <Heading title="Resume" />
      </div>
      <div className="resume-container">
        <motion.div
          className="box"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {" "}
          <a href="https://aditya-patil-resume.my.canva.site/">
            <button
              type="button"
              className="py-10 px-20 me-2 mb-2 text-xl font-large text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 z-20"
            >
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>
    </>
  );
}

export default Resume;
