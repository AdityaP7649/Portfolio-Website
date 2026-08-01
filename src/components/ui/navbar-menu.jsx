import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[var(--text-primary)] hover:text-[var(--accent-color)]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-[var(--card-bg)] backdrop-blur-sm rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_2px_20px_rgba(0,0,0,0.06)] flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href }) => {
  return (
    <Link to={href} className="flex space-x-2 items-center">
      <div className="py-2">
        <h4 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
          {title}
        </h4>
        <p className="text-[var(--text-secondary)] text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

