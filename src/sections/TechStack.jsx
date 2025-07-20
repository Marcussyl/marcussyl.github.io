import TechStackGrid from "@/components/TechStackGrid";
import { motion } from "motion/react";

const techStackItems = [
  // frontend
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-react.png",
    imgAlt: "react",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-vite.png",
    imgAlt: "vite",
  },
  {
    imgPath:
      "/software-engineer-portfolio/assets/tech-icos/ico-react-native.png",
    imgAlt: "react native",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-motion.png",
    imgAlt: "framer motion",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-jquery.png",
    imgAlt: "jquery",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-redux.png",
    imgAlt: "redux",
  },
  {
    imgPath:
      "/software-engineer-portfolio/assets/tech-icos/ico-tailwindcss.png",
    imgAlt: "tailwind css",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-astro.png",
    imgAlt: "astro",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-nextjs.png",
    imgAlt: "nextjs",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-js.png",
    imgAlt: "js",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-ts.png",
    imgAlt: "ts",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-nodejs.png",
    imgAlt: "nodejs",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-csharp.png",
    imgAlt: "csharp",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-java.png",
    imgAlt: "java",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-net.png",
    imgAlt: "net",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-umbraco.png",
    imgAlt: "umbraco",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-mysql.png",
    imgAlt: "mysql",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-openapi.png",
    imgAlt: "open api",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-aws.png",
    imgAlt: "aws",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-azure.png",
    imgAlt: "azure",
  },
  {
    imgPath: "/software-engineer-portfolio/assets/tech-icos/ico-docker.png",
    imgAlt: "docker",
  },
];

export const TechStackSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-5 py-7">
      <motion.div
        className="inline-flex w-full flex-col items-start gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="tag mx-auto">
          <p className="whitespace-nowrap">Tech Stack</p>
          <img
            src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png"
            alt="icon"
            className=""
          />
        </div>
        <h2 className="gradient-text section-title mx-auto text-center leading-normal">
          Technologies I Used
        </h2>
        <p className="section-desc">
          I've worked with a variety of modern technologies and frameworks over
          the years, and I'm always eager to learn new ones. Here are some of
          the technologies I've used:
        </p>
      </motion.div>
      <TechStackGrid techStackItems={techStackItems} />
    </div>
  );
};
