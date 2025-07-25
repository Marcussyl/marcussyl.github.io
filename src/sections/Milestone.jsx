import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const milestones = [
  {
    id: "java-competition",
    title: "MasterCode Java Contest 2024",
    desc: "Participated in the 2nd Hong Kong Java Mastercode Contest hosted by Venturenix and HKSTP, engaging with over 100 developers in a fast-paced competitive environment, showcased problem-solving agility, real-time algorithm design, and Java proficiency under time constraints.",
    link: "https://venturenix.com/2024/03/venturenix-hkstp-mastercode-java-python/",
    imgs: ["/assets/milestone-thumbs/mastercode/mastercode.webp"],
  },
  {
    id: "hackathon",
    title: "IEEE Web3 Hackathon Competition 2022 (First-Runner Up)",
    desc: "Awarded First Runner-Up in the IEEE Web3 Hackathon, held at Cyberport Hong Kong, where top developers competed to create innovative Web3 applications. Our team built a fully functional prototype called CryptoFlag, which is a decentralized donation platform leveraging blockchain’s immutability and decentralization to allow users to anonymously denote money without revealing their identities. Through rapid prototyping under time pressure, I sharpened my skills in smart contract development using Hardhat and Ethers.js, integrated real blockchain APIs.",
    link: "https://www.ieeehkblockchain.org/ieee-hackathon-2022",
    imgs: ["/assets/milestone-thumbs/hackathon/hackathon.webp"],
  },
  {
    id: "aws-practitioner",
    title: "AWS Practitioner Certificate",
    desc: "The AWS Cloud Practitioner certificate demonstrates my understanding of core AWS services, cloud concepts, billing models, and architectural principles and my ability to navigate cloud environments, communicate technical benefits to stakeholders, and integrate cloud-native thinking into modern software development workflows.",
    imgs: ["/assets/milestone-thumbs/aws-practitioner/aws-practitioner.webp"],
  },
];

export const Milestone = () => {
  const [openAchievement, setOpenAchievement] = useState("java-competition");

  const handleAccordionClick = (e) => {
    const achievement = e.currentTarget.getAttribute("data-achievement");
    setOpenAchievement(achievement);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="tag">
        <p>Milestones</p>
        <img src="/assets/tag-icons/achievement.png" alt="milestone" />
      </div>
      <h1 className="section-title gradient-text">Milestone</h1>
      {/* <p className="section-desc">
        A showcase of certifications, awards, and achievements highlighting
        expertise, innovation, and dedication to front-end development.
      </p> */}
      <div className="accordion flex w-[100%] flex-col justify-center gap-3 md:flex-row md:gap-7">
        <div className="thumbnails flex-1">
          {milestones.map(
            (milestone, index) =>
              openAchievement === milestone.id && (
                <Swiper
                  autoplay={true}
                  loop={false}
                  slidesPerView={1}
                  cssMode={true}
                  mousewheel={true}
                  keyboard={true}
                  pagination={{
                    el: `.swiper-pagination-${index + 1}`,
                    type: "bullets",
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper w-full rounded-lg"
                  key={milestone.id}
                >
                  {milestone.imgs.map((imgSrc, i) => (
                    <SwiperSlide
                      className="flex !w-full justify-center"
                      key={i}
                    >
                      <img
                        src={imgSrc}
                        alt={milestone.title}
                        className="mx-auto object-contain pb-8"
                        data-achievement={milestone.id}
                      />
                    </SwiperSlide>
                  ))}
                  <div
                    className={`swiper-pagination-${index + 1} flex justify-center gap-2`}
                  ></div>
                </Swiper>
              ),
          )}
        </div>
        <div className="details flex-1">
          {milestones.map((milestone) => (
            <div className="accordion-item" key={milestone.id}>
              <div
                className="accordion-title gradient-text border-main-purple relative flex cursor-pointer items-center justify-between gap-2 border-b-[1px] py-3 text-lg font-bold"
                data-achievement={milestone.id}
                onClick={handleAccordionClick}
              >
                <h2>{milestone.title}</h2>
                <img
                  src="/assets/google-down-arrow.svg"
                  alt="arrow"
                  className={`transition-all duration-200 ease-linear ${openAchievement === milestone.id ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {openAchievement === milestone.id && (
                  <motion.div
                    className="accordion-content text-grayish-white py-3 text-base overflow-hidden"
                    data-achievement={milestone.id}
                    onClick={handleAccordionClick}
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  >
                    {milestone.desc}
                    {milestone.link && (
                      <>
                        <br />
                        <br />
                        <a
                          href={milestone.link}
                          target="_blank"
                          className="text-sharp-purple underline"
                        >
                          Learn More
                        </a>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
