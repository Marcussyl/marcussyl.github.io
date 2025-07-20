import { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailCard from "@/components/ProjectDetailCard";
import { motion, AnimatePresence } from "motion/react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const projects = [
  {
    projectId: "1",
    thumbImgs: [
      "/software-engineer-portfolio/assets/proj-thumbs/towngas-lifestyle.png",
    ],
    title: "Towngas Lifestyle",
    tags: ["Astro", "SSG", "SSR", "React", "Multi-language"],
    overview:
      "A redesigned landing page project aimed at refreshing the digital identity of Towngas Lifestyle. This clean, responsive interface highlights the brand’s expanded offerings—from smart kitchens and home services to premium retail experiences.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/towngas-lifestyle-website",
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "2",
    thumbImgs: [
      "/software-engineer-portfolio/assets/proj-thumbs/horizon-banking.png",
    ],
    title: "Horizon Banking",
    tags: [
      "Next.js",
      "OAuth2",
      "SSR",
      "Cloud-hosted",
      "Full-Stack",
      "Restful API Integration",
    ],
    overview:
      "A full-stack financial platform that empowers users to connect their bank accounts, monitor transactions, transfer money between platform users, and generate insightful financial reports.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/banking",
    liveSiteLink: "https://banking-two-ochre.vercel.app/sign-in",
    videoLink: "",
  },
  {
    projectId: "3",
    thumbImgs: [
      "/software-engineer-portfolio/assets/proj-thumbs/mark-sixer.png",
    ],
    title: "Mark Sixer",
    tags: ["React", "Vite", "Puppeteer", "OCR", "Netlify"],
    overview:
      "Mark Sixer is designed to streamline access to Mark Six lottery results. The app automatically scrapes the latest lottery results from official websites, and leverages OCR technology to extract numerical data from result images.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/mark-sixer",
    liveSiteLink: "https://marcussyl.github.io/mark-sixer/",
    videoLink: "",
  },
  {
    projectId: "4",
    thumbImgs: ["/software-engineer-portfolio/assets/proj-thumbs/jamming.png"],
    title: "Jammming",
    tags: ["React", "OAuth2", "Spotify API"],
    overview:
      "A sleek, user-friendly web app built with React that empowers users to search for tracks, artists, and albums through the Spotify API. Once users find their favorite songs, they can effortlessly assemble a custom playlist and save it directly to their Spotify account.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/jamming",
    liveSiteLink: "https://marcussyl.github.io/jamming/",
    videoLink: "",
  },
  {
    projectId: "5",
    thumbImgs: ["/software-engineer-portfolio/assets/proj-thumbs/ai-racer.png"],
    title: "AI Racer",
    tags: ["MkDocs", "SSG", "Light/Dark Mode Support"],
    overview:
      "A beautifully structured landing page crafted to showcase and document participation in the AWS DeepRacer competition. Powered by MkDocs and styled with MkDocs Material, the page delivers clean, fast-loading documentation that’s as sleek as the autonomous vehicles it represents.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/deepracer",
    liveSiteLink: "https://marcussyl.github.io/deepracer/",
    videoLink: "",
  },
  {
    projectId: "6",
    thumbImgs: ["/software-engineer-portfolio/assets/proj-thumbs/big-two.png"],
    title: "Big Two",
    tags: ["Java", "Java Swing", "OOP", "Real-time Game Validation"],
    overview:
      "A Java-based desktop application that simulates the popular East Asian card game in an intuitive, interactive format. Built with Java Swing, the project delivers a familiar gaming experience through a custom graphical user interface, complete with card visuals, player turns, and game logic.",
    features: null,
    challenges: null,
    githubLink: "https://github.com/Marcussyl/big-two",
    liveSiteLink: null,
    videoLink: "",
  },
];

export const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const modalRef = useRef();

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleCardClick = (e) => {
    const projectId = e.currentTarget.getAttribute("data-project-id");
    setOpenProjectId(projectId);
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (openProjectId && modal) {
      // document.body.style.overflow = "hidden";
      // document.documentElement.style.overflow = "hidden";
      disableBodyScroll(modal);
    } else if (modal) {
      // document.body.style.overflow = "";
      // document.documentElement.style.overflow = "";
      enableBodyScroll(modal);
    }
    return () => {
      // document.body.style.overflow = "";
      // document.documentElement.style.overflow = "";
      if (modal) enableBodyScroll(modal);
      clearAllBodyScrollLocks();
    };
  }, [openProjectId]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <motion.div
        className="flex flex-col items-center justify-center gap-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="tag">
          <p>Projects</p>
          <img
            src="/software-engineer-portfolio/assets/tag-icons/tech-stack.png"
            alt="icon"
          />
        </div>
        <h1 className="gradient-text section-title">
          Latest Projects I Have Done
        </h1>
        {/* <p className="section-desc">
          Explore my latest projects, showcasing creativity and precision in
          design. Each project reflects innovation and user-focused solutions.
        </p> */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 py-4 md:flex-row">
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard
              key={project.projectId + project.title}
              handleCardClick={handleCardClick}
              {...project}
            />
          ))}
        </div>
      </motion.div>
      <div className="round-btn animate-bounce" onClick={handleShowMore}>
        <img
          src="/software-engineer-portfolio/assets/up-right-arrow.png"
          alt="arrow icon"
          className="rotate-135"
        />
      </div>

      {/* Project Detail Card */}
      {openProjectId && (
        <div
          className="blury-bg fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black/20 backdrop-blur-xs"
          onClick={() => setOpenProjectId(null)}
        ></div>
      )}
      {projects.map((project, idx) => (
        <AnimatePresence key={idx}>
          {openProjectId === project.projectId && (
            <ProjectDetailCard
              setOpenProjectId={setOpenProjectId}
              title={project.title}
              desc={project.overview}
              features={project.features}
              challenges={project.challenges}
              githubLink={project.githubLink}
              liveLink={project.liveSiteLink}
              tags={project.tags}
              thumbImgs={project.thumbImgs}
              modalRef={modalRef}
            />
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};
