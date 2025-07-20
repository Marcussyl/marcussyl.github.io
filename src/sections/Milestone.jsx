import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { motion } from "motion/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Milestone = () => {
  const [openAchievement, setOpenAchievement] = useState("aws-practitioner");

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
        <img
          src="/software-engineer-portfolio/assets/tag-icons/achievement.png"
          alt="milestone"
        />
      </div>
      <h1 className="section-title gradient-text">Milestone</h1>
      {/* <p className="section-desc">
        A showcase of certifications, awards, and achievements highlighting
        expertise, innovation, and dedication to front-end development.
      </p> */}
      <div className="accordion" data-active-accordion="aws-practitioner">
        <div className="thumbnails">
          {openAchievement === "aws-practitioner" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={false}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-1", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-full rounded-lg"
            >
              <SwiperSlide className="flex !w-full justify-center">
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/aws-practitioner/aws-practitioner.png"
                  alt="aws practitioner"
                  className="mx-auto object-contain pb-8"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-1 flex justify-center gap-2"></div>
            </Swiper>
          )}
          {/* link: https://www.ieeehkblockchain.org/ieee-hackathon-2022 */}
          {openAchievement === "hackathon" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={false}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-2", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-full rounded-lg"
            >
              <SwiperSlide className="flex !w-full justify-center">
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/hackathon/hackathon.png"
                  alt="aws practitioner"
                  className="mx-auto object-contain pb-8"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-2 flex justify-center gap-2"></div>
              {/* <div className="absolute bottom-0 left-0 w-full">
          </div> */}
            </Swiper>
          )}
          {openAchievement === "java-competition" && (
            <Swiper
              // navigation={true}
              autoplay={true}
              loop={false}
              slidesPerView={1}
              cssMode={true}
              mousewheel={true}
              keyboard={true}
              pagination={{
                el: ".swiper-pagination-3", // Use a valid DOM element here
                type: "bullets",
                clickable: true,
              }}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper w-full rounded-lg"
            >
              <SwiperSlide className="flex !w-full justify-center">
                <img
                  src="/software-engineer-portfolio/assets/milestone-thumbs/mastercode/mastercode.png"
                  alt="aws practitioner"
                  className="mx-auto object-contain pb-8"
                  data-achievement="aws-practitioner"
                />
              </SwiperSlide>
              <div className="swiper-pagination-3 flex justify-center gap-2"></div>
            </Swiper>
          )}
        </div>
        <div className="details">
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="aws-practitioner"
              onClick={handleAccordionClick}
            >
              <h2>AWS Pactitioner Certificate</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="aws-practitioner"
              onClick={handleAccordionClick}
            >
              The AWS Cloud Practitioner certificate demonstrates my
              understanding of core AWS services, cloud concepts, billing
              models, and architectural principles and my ability to navigate
              cloud environments, communicate technical benefits to
              stakeholders, and integrate cloud-native thinking into modern
              software development workflows.
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="hackathon"
              onClick={handleAccordionClick}
            >
              <h2>IEEE Web3 Hackathon Competition 2022 (First-Runner Up)</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div className="accordion-content" data-achievement="hackathon">
              Awarded First Runner-Up in the IEEE Web3 Hackathon, held at
              Cyberport Hong Kong, where top developers competed to create
              innovative Web3 applications. Our team built a fully functional
              prototype called CryptoFlag, which is a decentralized donation
              platform leveraging blockchain’s immutability and decentralization
              to allow users to anonymously denote money without revealing their
              identities. <br />
              <br />
              Through rapid prototyping under time pressure, I sharpened my
              skills in smart contract development using Hardhat and Ethers.js,
              integrated real blockchain APIs.
              <br />
              <br />
              <a
                href="https://www.ieeehkblockchain.org/ieee-hackathon-2022"
                target="_blank"
                className="text-sharp-purple underline"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="accordion-item">
            <div
              className="accordion-title gradient-text"
              data-achievement="java-competition"
              onClick={handleAccordionClick}
            >
              <h2>MasterCode Java Contest 2024</h2>
              <img
                src="/software-engineer-portfolio/assets/google-down-arrow.svg"
                alt="up-right-arrow"
                className=""
              />
            </div>
            <div
              className="accordion-content"
              data-achievement="java-competition"
            >
              Participated in the 2nd Hong Kong Java Mastercode Contest hosted
              by Venturenix and HKSTP, engaging with over 100 developers in a
              fast-paced competitive environment, showcased problem-solving
              agility, real-time algorithm design, and Java proficiency under
              time constraints.
              <br />
              <br />
              <a
                href="https://venturenix.com/2024/03/venturenix-hkstp-mastercode-java-python/"
                target="_blank"
                className="text-sharp-purple underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
