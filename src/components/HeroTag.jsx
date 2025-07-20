import Float from "@/fancy/components/blocks/float.jsx";
import { motion } from "motion/react";

export const HeroTag = ({ number, desc, moreClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.5, ease: "easeOut" }}
      className={`absolute hidden md:block ${moreClass}`}
    >
      <Float>
        <div className={`flex items-center gap-2 rounded bg-[#1e103a] p-3`}>
          <p className="gradient-text text-2xl font-bold">{number}</p>
          <p
            className="text-grayish-white text-left text-xs"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </Float>
    </motion.div>
  );
};
