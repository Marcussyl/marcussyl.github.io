import { HeroTag } from "@/components/HeroTag";
import { motion } from "motion/react";
import { useTypewriter } from "@/components/useTypewriter";
import TextRotate from "@/fancy/components/text/text-rotate";

export const HeroSection = () => {
  const displayText = useTypewriter(
    "I'm a web developer passionate about creating responsive, user-friendly web experiences with solid fundation in modern technologies✨",
    70,
  );

  return (
    <div className="relative mx-auto mt-4 flex w-full flex-col items-center justify-center gap-7 text-center">
      <div className="tag">
        <p>Hi there</p>
        <img src="/assets/tag-icons/shake-hand.png" />
      </div>
      <div className="gradient-text">
        <h2 className="text-xl">I'm Marcus,</h2>
        {/* <h1 className="section-title text-4xl leading-relaxed">
          Web Developer
        </h1> */}
        <TextRotate
          texts={["Web Developer", "Vibe Coder"]}
          mainClassName="text-4xl text-center text-transparent px-2 sm:px-2 md:px-3 overflow-hidden justify-center rounded-lg"
          staggerFrom={"first"}
          initial={{ y: "10%" }}
          animate={{ y: 0 }}
          exit={{ y: "-10%" }}
          staggerDuration={0.035}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
      </div>
      <p className="section-desc typewriter-effect inline-block max-w-[900px]">
        {displayText}
        <span className="animate-blinking-caret inline-block h-3 w-3 border-b-2"></span>
      </p>
      <a href="/assets/Marcus_Sze_CV.pdf" download="Marcus_Sze_CV.pdf">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glowing-btn block"
        >
          <div className="inner">
            Download CV
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 12.75V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H14.625C15.1223 16.5 15.5992 16.3025 15.9508 15.9508C16.3025 15.5992 16.5 15.1223 16.5 14.625V12.75M12.75 9L9 12.75M9 12.75L5.25 9M9 12.75V1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.button>
      </a>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="mailto:szeyulam.jobs@gmail.com"
          target="_blank"
          className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
        >
          <img src="/assets/social-media/email.png" alt="email icon" />
        </a>
        <a
          href="https://github.com/Marcussyl"
          target="_blank"
          className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
        >
          <img src="/assets/social-media/github.png" alt="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/marcus-sze-3538ba229/"
          target="_blank"
          className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
        >
          <img src="/assets/social-media/linkedin.png" alt="linkedin icon" />
        </a>
      </div>
      {/* <HeroTag
        number={"05+"}
        desc={"Technologies<br>mastered"}
        moreClass="top-6 left-10"
      />
      <HeroTag
        number={"2+"}
        desc={"Years of<br>experiences"}
        moreClass="bottom-5 right-3"
      /> */}
    </div>
  );
};
