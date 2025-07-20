import $ from 'jquery';
import { Navigations } from '@/sections/Navigation';
import { HeroSection } from '@/sections/Hero';
import { TechStackSection } from '@/sections/TechStack';
import { Projects } from '@/sections/Projects';
import { Milestone } from '@/sections/Milestone';
import { Contacts } from '@/sections/Contacts';
import { useEffect, useState, useRef } from "react";
import { HeaderContext } from '@/lib/HeaderContext';


function App() {
  const [activeHeaderLink, setActiveHeaderLink] = useState('#about');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const scrollHandlerEnabled = useRef(true);

  useEffect(() => {
    const handleClick = function () {
      const accordionItem = $(this).closest(".accordion-item");
      const selAccordionId = $(this).data("achievement");
      const accordion = $(this).closest(".accordion");
      const selContent = accordionItem.find(".accordion-content");

      accordion.attr("data-active-accordion", selAccordionId);

      if (selContent.is(":visible")) {
        return; // Do nothing if already opened
      }

      accordionItem.find(".accordion-content").slideDown(200, "linear");
      $("#milestone .accordion-content").not(selContent).slideUp(200, "linear");
    };

    $(".accordion .accordion-title").on("click", handleClick);

    return () => {
      $(".accordion .accordion-title").off("click", handleClick);
    };
  }, []);

  const scrollToTargetId = (targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleHeaderLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileNavOpen(false);
    scrollHandlerEnabled.current = false;
    scrollToTargetId(targetId);
    setActiveHeaderLink(targetId);

    setTimeout(() => {
      setActiveHeaderLink(targetId);
      scrollHandlerEnabled.current = true;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollHandlerEnabled.current) return;
      const sections = [
        { id: "#about" },
        { id: "#tech-stack" },
        { id: "#projects" },
        { id: "#milestone" },
        { id: "#contact" },
      ];
      let current = "#about";
      for (const section of sections) {
        const el = document.querySelector(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset =
            section.id === "#contact" ? window.innerHeight / 3 : 100;
          if (rect.top <= offset) {
            current = section.id;
          }
        }
      }
      setActiveHeaderLink(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={"font-mono"}>
      <section id="navigation">
        <HeaderContext.Provider value={{handleHeaderLinkClick, activeHeaderLink, mobileNavOpen, setMobileNavOpen}}>
          <Navigations handleHeaderLinkClick={handleHeaderLinkClick}/>
        </HeaderContext.Provider>
      </section>
      {/* HERO Section */}
      <section
        id="about"
        className="bg-[url('/software-engineer-portfolio/assets/hero-bg.png')] bg-center flex items-center"
      >
        <div className="section-content py-30">
          <HeroSection />
        </div>
      </section>
      {/* TECH STACK Section */}
      <section id="tech-stack">
        <div className="section-content">
          {/* <TechStackSection /> */}
          <TechStackSection />
        </div>
      </section>
      {/* PROJECTS Section */}
      <section
        id="projects"
        style={{
          background:
            "url('/software-engineer-portfolio/assets/grid-bg.png') no-repeat, url('/software-engineer-portfolio/assets/light-bg.png') no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="section-content">
          <Projects />
        </div>
      </section>
      {/* Milestone Section */}
      <section
        id="milestone"
        style={{
          background:
            "url('/software-engineer-portfolio/assets/fancy-bg.svg') no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="section-content">
          <Milestone />
        </div>
      </section>
      {/* CONTACT Section */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute z-20 h-30 w-3/5 left-1/5 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <div className="section-content">
          <Contacts />
        </div>
      </section>
    </div>
  );
}

export default App
