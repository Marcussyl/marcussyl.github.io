import { motion } from "motion/react";

const ProjectDetailCard = ({
  setOpenProjectId,
  title,
  desc,
  features,
  challenges,
  githubLink,
  liveLink,
  tags,
  thumbImgs,
  modalRef
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-1/2 left-1/2 z-100 w-full max-w-[1080px] -translate-x-1/2 -translate-y-1/2 px-7"
    >
      <div className="text-grayish-white border-main-purple bg-dark-purple relative w-full rounded-xl border-2 border-dashed pb-5 pt-12 md:h-auto md:pb-8 md:pt-8">
        <button
          className="group absolute top-4 right-4 z-20 cursor-pointer"
          onClick={() => setOpenProjectId(null)}
        >
          <img
            src="/software-engineer-portfolio/assets/icon-close.svg"
            alt="close icon"
            className="h-6 w-6 group-hover:hidden"
          />
          <img
            src="/software-engineer-portfolio/assets/icon-close-purple.svg"
            alt="close icon"
            className="hidden h-6 w-6 group-hover:block"
          />
        </button>
        <div
          className="flex h-full max-h-[500px] flex-col gap-3 md:flex-row md:gap-7 overflow-y-auto px-5 md:px-8"
          ref={modalRef}
        >
          <div className="basic-info flex flex-1 flex-col gap-3 md:gap-5">
            <img src={thumbImgs[0]} alt="swiper img" className="proj-thumb" />
            <div className="tags flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <div
                  className="border-grayish-white text-grayish-white rounded-[18px] border-1 px-2 py-1 text-xs whitespace-nowrap md:px-[13px] md:text-sm"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="details flex flex-1 flex-col gap-3 md:gap-5">
            <h2 className="text-sharp-purple text-2xl font-bold">{title}</h2>
            <div className="overview">
              <h3 className="text-grayish-white text-lg font-bold">Overview</h3>
              <p className="text-grayish-white text-sm md:text-base">{desc}</p>
            </div>
            {(features || challenges) && (
              <div className="flex gap-10">
                {features && (
                  <div className="features flex flex-col gap-2">
                    <h3 className="proj-subtitle">Key Features</h3>
                    {features.map((feature, index) => (
                      <div className="feature-item flex gap-2" key={index}>
                        <img
                          src="/software-engineer-portfolio/assets/tick.png"
                          alt="icon"
                        />
                        <p className="proj-desc">{feature}</p>
                      </div>
                    ))}
                  </div>
                )}
                {challenges && (
                  <div className="challenges flex flex-col gap-2">
                    <h3 className="proj-subtitle">Challenges</h3>
                    {challenges.map((challenge, index) => (
                      <div className="feature-item flex gap-2" key={index}>
                        <img
                          src="/software-engineer-portfolio/assets/tick.png"
                          alt="icon"
                        />
                        <p className="proj-desc">{challenge}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="buttons flex gap-2 md:gap-5">
              {githubLink && (
                <motion.a
                  href={githubLink}
                  target="_blank"
                  className="glowing-btn flex-1"
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="inner w-full justify-center gap-3 py-2 text-sm md:text-base">
                    GitHub
                    <img
                      src="/software-engineer-portfolio/assets/github.png"
                      alt="icon"
                      className="w-[15px] object-contain"
                    />
                  </div>
                </motion.a>
              )}
              {liveLink && (
                <motion.a
                  href={liveLink}
                  target="_blank"
                  className="border-grayish-white flex flex-1 cursor-pointer items-center justify-center gap-3 border-2 px-2 py-2 text-sm md:text-base"
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <p>Live</p>
                  <img
                    src="/software-engineer-portfolio/assets/play.png"
                    alt="icon"
                    className="w-[15px] object-contain"
                  />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailCard;
