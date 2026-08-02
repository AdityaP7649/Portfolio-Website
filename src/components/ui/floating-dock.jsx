import { cn } from "../../lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";

export function FloatingDock({ items, className }) {
  return (
    <>
      <FloatingDockDesktop items={items} className={className} />
      <FloatingDockMobile items={items} className={className} />
    </>
  );
}

function FloatingDockMobile({ items, className }) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-2xl px-4 py-3 md:hidden z-50",
        className
      )}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.title}
            to={item.href}
            className="flex items-center justify-center rounded-xl p-2 transition-colors"
            style={{
              color: isActive ? "var(--accent-color)" : "var(--text-secondary)",
              background: isActive ? "var(--bg-secondary)" : "transparent",
            }}
          >
            <div className="h-5 w-5">{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}

function FloatingDockDesktop({ items, className }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex items-end gap-4 rounded-2xl px-4 pb-3 pt-3 fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
        className
      )}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border-color)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const location = useLocation();
  const isActive = location.pathname === href;

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const iconSizeTransform = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(iconSizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link to={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center justify-center rounded-xl",
          isActive ? "bg-[var(--bg-secondary)]" : ""
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit whitespace-pre rounded-md px-2 py-0.5 text-xs"
              style={{
                background: "var(--accent-color)",
                color: "#ffffff",
              }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          <div
            style={{
              color: isActive
                ? "var(--accent-color)"
                : "var(--text-secondary)",
              width: "100%",
              height: "100%",
            }}
          >
            {icon}
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
