import TechStackGrid from "@/components/TechStackGrid";
import { motion } from "motion/react";

const techStackItems = [
  // frontend
  {
    imgPath: "/assets/tech-icos/ico-react.webp",
    imgAlt: "react",
  },
  {
    imgPath: "/assets/tech-icos/ico-vite.webp",
    imgAlt: "vite",
  },
  {
    imgPath: "/assets/tech-icos/ico-react-native.png",
    imgAlt: "react native",
  },
  {
    imgPath: "/assets/tech-icos/ico-motion.png",
    imgAlt: "framer motion",
  },
  {
    imgPath: "/assets/tech-icos/ico-jquery.webp",
    imgAlt: "jquery",
  },
  {
    imgPath: "/assets/tech-icos/ico-tailwindcss.webp",
    imgAlt: "tailwind css",
  },
  {
    imgPath: "/assets/tech-icos/ico-astro.webp",
    imgAlt: "astro",
  },
  {
    imgPath: "/assets/tech-icos/ico-nextjs.webp",
    imgAlt: "nextjs",
  },
  {
    imgPath: "/assets/tech-icos/ico-js.webp",
    imgAlt: "js",
  },
  {
    imgPath: "/assets/tech-icos/ico-ts.webp",
    imgAlt: "ts",
  },
  {
    imgPath: "/assets/tech-icos/ico-nodejs.webp",
    imgAlt: "nodejs",
  },
  {
    imgPath: "/assets/tech-icos/ico-csharp.webp",
    imgAlt: "csharp",
  },
  {
    imgPath: "/assets/tech-icos/ico-java.webp",
    imgAlt: "java",
  },
  {
    imgPath: "/assets/tech-icos/ico-net.webp",
    imgAlt: "net",
  },
  {
    imgPath: "/assets/tech-icos/ico-postman.webp",
    imgAlt: "postman",
  },
  {
    imgPath: "/assets/tech-icos/ico-umbraco.webp",
    imgAlt: "umbraco",
  },
  {
    imgPath: "/assets/tech-icos/ico-mysql.webp",
    imgAlt: "mysql",
  },
  {
    imgPath: "/assets/tech-icos/ico-openapi.png",
    imgAlt: "open api",
  },
  {
    imgPath: "/assets/tech-icos/ico-aws.webp",
    imgAlt: "aws",
  },
  {
    imgPath: "/assets/tech-icos/ico-azure.webp",
    imgAlt: "azure",
  },
  {
    imgPath: "/assets/tech-icos/ico-docker.webp",
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
            src="/assets/tag-icons/tech-stack.png"
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
