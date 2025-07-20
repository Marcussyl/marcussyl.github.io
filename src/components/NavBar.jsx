import { useContext } from "react";
import { HeaderContext } from "@/lib/HeaderContext.js";
import { motion, AnimatePresence } from "motion/react";

export const NavBar = () => {
  const {
    handleHeaderLinkClick,
    activeHeaderLink,
    mobileNavOpen,
    setMobileNavOpen,
  } = useContext(HeaderContext);
  return (
    <div>
      <nav className="fixed top-5 left-1/2 z-50 mx-auto w-9/10 max-w-[1300px] -translate-x-1/2 rounded-full border-2 border-[#2c1854] bg-[#160c2a]/70 px-7 shadow-[0_0_10px_rgba(0,0,0,0.1)] backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={(e) => handleHeaderLinkClick(e, "#about")}
          >
            <img
              src="/assets/globe.svg"
              alt="globe icon"
            />
            <p className="text-sharp-purple font-pacifico text-xl font-black">
              Mars
            </p>
          </div>
          {/* Right side - Navigation Links */}
          <div className="hidden items-center gap-6 navbar:flex">
            <div
              className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                activeHeaderLink === "#about" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#about")}
            >
              About Me
            </div>
            <div className="bg-grayish-white/50 h-1 w-1 rounded-full"></div>
            <div
              className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                activeHeaderLink === "#tech-stack" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#tech-stack")}
            >
              Technologies
            </div>
            <div className="bg-grayish-white/50 h-1 w-1 rounded-full"></div>
            <div
              className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                activeHeaderLink === "#projects" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#projects")}
            >
              Projects
            </div>
            <div className="bg-grayish-white/50 h-1 w-1 rounded-full"></div>
            <div
              className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                activeHeaderLink === "#milestone" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#milestone")}
            >
              Milestone
            </div>
            <div className="bg-grayish-white/50 h-1 w-1 rounded-full"></div>
            <div
              className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                activeHeaderLink === "#contact" ? "text-sharp-purple" : ""
              }`}
              onClick={(e) => handleHeaderLinkClick(e, "#contact")}
            >
              Contact
            </div>
          </div>
          <div
            className="block cursor-pointer navbar:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            <div className="group py-4">
              <img
                src="/assets/hamburger.svg"
                alt="hamburger icon"
                className="w-[30px] object-contain group-hover:hidden"
              />
              <img
                src="/assets/hamburger-purple.svg"
                alt="hamburger icon"
                className="hidden w-[30px] object-contain group-hover:block"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            className="bg-dark-purple fixed right-0 z-50 h-screen w-full p-10 md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between gap-2 rounded-lg border-2 border-[#2c1854] bg-[#160c2a]/70 px-4 py-4">
              <div className="flex gap-2">
                <img
                  src="/assets/globe.svg"
                  alt=""
                />
                <p className="text-sharp-purple font-pacifico text-xl font-black">
                  Mars
                </p>
              </div>
              <div
                className="text-grayish-white hover:text-sharp-purple group z-20 cursor-pointer text-2xl"
                onClick={() => setMobileNavOpen(false)}
              >
                <img
                  src="/assets/icon-close.svg"
                  alt="close icon"
                  className="h-6 w-6 group-hover:hidden"
                />
                <img
                  src="/assets/icon-close-purple.svg"
                  alt="close icon"
                  className="hidden h-6 w-6 group-hover:block"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col items-start gap-2 border-2 border-dashed border-[#2c1854] px-4">
              <a
                href="#about"
                className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                  activeHeaderLink === "#about" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#about")}
              >
                About Me
              </a>
              <a
                href="#tech-stack"
                className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                  activeHeaderLink === "#tech-stack" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#tech-stack")}
              >
                Technologies
              </a>
              <a
                href="#projects"
                className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                  activeHeaderLink === "#projects" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`text-grayish-white hover:text-light-purple cursor-pointer py-4 text-lg font-medium transition-colors focus:outline-none ${
                  activeHeaderLink === "#contact" ? "text-sharp-purple" : ""
                }`}
                onClick={(e) => handleHeaderLinkClick(e, "#contact")}
              >
                Contact
              </a>
              <div className="h-[1px] w-full bg-[#2c1854]"></div>
              <div className="flex items-center justify-center gap-4 py-4">
                <a
                  href="https://github.com/Marcussyl"
                  target="_blank"
                  className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
                >
                  <img
                    src="/assets/social-media/github.png"
                    alt="github icon"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcus-sze-3538ba229/"
                  target="_blank"
                  className="border-main-purple flex h-[40px] w-[40px] items-center justify-center rounded-full border-1 p-2"
                >
                  <img
                    src="/assets/social-media/linkedin.png"
                    alt="linkedin icon"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
