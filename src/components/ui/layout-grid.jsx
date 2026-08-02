import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export function LayoutGrid({ cards }) {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "min-h-[200px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer",
              selected?.id === card.id
                ? "rounded-lg fixed inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40 rounded-xl h-full w-full"
                  : "rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <CardThumbnail card={card} />
          </motion.div>
        </div>
      ))}
      <AnimatePresence>
        {selected && (
          <motion.div
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black h-full w-full z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function CardThumbnail({ card }) {
  if (card.thumbnail) {
    return (
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        alt={card.title || "thumbnail"}
        className="object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      />
    );
  }

  return (
    <motion.div
      layoutId={`image-${card.id}-image`}
      className="absolute inset-0 h-full w-full flex flex-col items-center justify-center gap-3 p-6"
      style={{ background: card.bg || "var(--accent-color)" }}
    >
      {card.icon && (
        <div style={{ color: card.iconColor || "rgba(255,255,255,0.7)" }}>
          {card.icon}
        </div>
      )}
      {card.title && (
        <span
          className="text-sm font-semibold tracking-wider uppercase"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: card.iconColor || "rgba(255,255,255,0.7)",
          }}
        >
          {card.title}
        </span>
      )}
    </motion.div>
  );
}

function SelectedCard({ selected }) {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10 rounded-lg"
      />
      <motion.div
        layoutId={`content-${selected.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-6 z-[70]"
      >
        {selected.content}
      </motion.div>
    </div>
  );
}
