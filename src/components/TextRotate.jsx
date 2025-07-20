import { LayoutGroup, motion } from "motion/react";

import TextRotate from "@/fancy/components/text/text-rotate";

export default function Preview() {
  return (
    <div className="font-overused-grotesk dark:text-muted text-foreground flex h-dvh w-dvw flex-row items-center justify-center overflow-hidden bg-white p-12 text-2xl font-light sm:p-20 sm:text-3xl md:p-24 md:text-5xl">
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            Make it{" "}
          </motion.span>
          <TextRotate
            texts={[
              "work!",
              "fancy ✽",
              "right",
              "fast",
              "fun",
              "rock",
              "🕶️🕶️🕶️",
            ]}
            mainClassName="text-white px-2 sm:px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  );
}
