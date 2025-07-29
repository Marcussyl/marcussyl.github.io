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
    thumbImgs: ["/assets/proj-thumbs/utensil.webp"],
    title: "Company Website Revamp",
    tags: ["Astro", "SSG", "SSR", "React", "Multi-language"],
    overview:
      "A redesigned landing page project aimed at refreshing the digital identity of the company and highlights the brand’s expanded offerings—from smart kitchens and home services to premium retail experiences.",
    features: null,
    challenges: null,
    githubLink: null,
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "2",
    thumbImgs: ["/assets/proj-thumbs/horizon-banking.webp"],
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
      "A full-stack financial platform enabling users to perform a range of banking operations.",
    features: [
      "Connect bank accounts",
      "Transfer money between platform users",
      "Generate financial reports",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/banking",
    liveSiteLink: "https://banking-two-ochre.vercel.app/sign-in",
    videoLink: "",
  },
  {
    projectId: "3",
    thumbImgs: ["/assets/proj-thumbs/mark-sixer.webp"],
    title: "Mark Sixer",
    tags: ["React", "Vite", "Puppeteer", "OCR", "Netlify"],
    overview:
      "Mark Sixer is designed to streamline access to Mark Six lottery results.",
    features: [
      "Scrapes the latest lottery results from official websites",
      "Extract numerical data from result images",
      "Backup records",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/mark-sixer",
    liveSiteLink: "https://marcussyl.github.io/mark-sixer/",
    videoLink: "",
  },
  {
    projectId: "4",
    thumbImgs: ["/assets/proj-thumbs/jamming.webp"],
    title: "Jammming",
    tags: ["React", "OAuth2", "Spotify API"],
    overview:
      "A sleek, user-friendly React web app for creating and saving custom Spotify playlists.",
    features: [
      "Search for tracks, artists, and albums",
      "Assemble a custom playlist",
      "Save playlist Spotify account",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/jamming",
    liveSiteLink: "https://marcussyl.github.io/jamming/",
    videoLink: "",
  },
  {
    projectId: "5",
    thumbImgs: ["/assets/proj-thumbs/ai-racer.webp"],
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
    thumbImgs: ["/assets/proj-thumbs/big-two.webp"],
    title: "Big Two",
    tags: ["Java", "Java Swing", "OOP", "Real-time Game Validation"],
    overview:
      "A Java-based desktop application that simulates the popular East Asian card game in an intuitive, interactive format.",
    features: [
      "Multiplayer mode",
      "Score tracking and game history",
      "Hint system to assist new players",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/big-two",
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "7",
    thumbImgs: ["/assets/proj-thumbs/pet-addoption.webp"],
    title: "Pet Addoption Client",
    tags: ["React", "React Route", "Yarn"],
    overview: "A pet adoption web client.",
    features: [
      "Browse available pets",
      "View detailed profiles",
      "Favourite / Wishlist",
      "Fuzzy search",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/adopt-a-pet",
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "8",
    thumbImgs: ["/assets/proj-thumbs/reddit-client.webp"],
    title: "Reddit Client",
    tags: ["React", "React Route"],
    overview:
      "A React-based web application that mimics the core functionality and user experience of Reddit.",
    features: ["Browse posts", "View comments", "Explore different subreddits"],
    challenges: null,
    githubLink: null, //https://reddit-client.netlify.app/
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "9",
    thumbImgs: ["/assets/proj-thumbs/flying-chess.webp"],
    title: "Flying Chess",
    tags: ["C++", "Text-based", "Console Game"],
    overview:
      "A text-based simulation of the classic board game, built in C++. It captures the core gameplay mechanics through console interactions, offering a simple yet engaging experience.",
    features: [
      "Multiplayer mode",
      "Score tracking and game history",
      "Dice roll simulation",
    ],
    challenges: null,
    githubLink: "https://github.com/Marcussyl/Flying-Chess",
    liveSiteLink: null,
    videoLink: "",
  },
  {
    projectId: "10",
    thumbImgs: ["/assets/proj-thumbs/wordpress-portfolio.webp"],
    title: "Wordpress Portfolio",
    tags: ["Wordpress", "SEO", "CMS", "PHP"],
    overview:
      "A sleek and responsive portfolio website for a photographer, built with WordPress. It showcases high-quality visuals, organized galleries to highlight creative work and attract potential clients.",
    features: [
      "Lightbox Viewer",
      "Image Galleries",
      "Social media integration",
    ],
    challenges: null,
    githubLink: null,
    liveSiteLink: null,
    videoLink: "https://youtu.be/WN45NaZQo9w",
  },
  {
    projectId: "11",
    thumbImgs: ["/assets/proj-thumbs/icy-reward.webp"],
    title: "Icy Reward",
    tags: ["Figma", "UI/UX", "Loyalty Program", "Prototype"],
    overview:
      "A Figma mockup for a theme park reward app designed to enhance visitor engagement and loyalty.",
    features: [
      "Point Collection",
      "Reward Redemption",
      "Tiered Membership",
      "Map",
    ],
    challenges: null,
    githubLink: null,
    liveSiteLink: null,
    videoLink:
      "https://www.figma.com/design/JLeKlSEZ2a9mh8yAkK7swt/IcyReward--Sprint-3-?node-id=0-1&p=f",
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
          <img src="/assets/tag-icons/tech-stack.png" alt="icon" />
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
        {/* <div className="flex items-center justify-center py-4">
        </div> */}
      </motion.div>
      {visibleCount < projects.length ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`glowing-btn block`}
          onClick={handleShowMore}
        >
          <div className="inner px-5">Show More</div>
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`glowing-btn block`}
          onClick={() => setVisibleCount(3)}
        >
          <div className="inner px-5">Collapse</div>
        </motion.button>
      )}

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
              videoLink={project.videoLink}
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
