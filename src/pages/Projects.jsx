import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  const ProjectCard = ({ project }) => {
    const scrollerRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const scrollNext = () => {
      const el = scrollerRef.current;
      if (!el) return;
      el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
    };
    const scrollPrev = () => {
      const el = scrollerRef.current;
      if (!el) return;
      el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
    };

    const updateEdges = () => {
      const el = scrollerRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      const left = el.scrollLeft;
      setAtStart(left <= 1);
      setAtEnd(left >= maxScroll - 1);
    };

    useEffect(() => {
      updateEdges();
      const el = scrollerRef.current;
      if (!el) return;
      const onScroll = () => updateEdges();
      el.addEventListener("scroll", onScroll, { passive: true });
      const onResize = () => updateEdges();
      window.addEventListener("resize", onResize);
      return () => {
        el.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    }, [project.images]);

    return (
      <div className="lg:w-[400px] w-full">
        <div className="rounded-xl shadow-card bg-white overflow-hidden">
          <div className="w-full aspect-[16/10] bg-white relative">
            {project.images ? (
              <div
                ref={scrollerRef}
                className="w-full h-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth flex"
              >
                {project.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${project.name} preview`}
                    loading="lazy"
                    className="min-w-full h-full object-cover snap-center"
                  />
                ))}
              </div>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            )}

            {project.images && project.images.length > 1 && (
              <>
                {!atStart && (
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow focus:outline-none"
                    aria-label="Previous"
                  >
                    <img src={arrow} alt="prev" className="w-5 h-5 rotate-180" />
                  </button>
                )}
                {!atEnd && (
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow focus:outline-none"
                    aria-label="Next"
                  >
                    <img src={arrow} alt="next" className="w-5 h-5" />
                  </button>
                )}
              </>
            )}
          </div>
          <div className="p-4 flex flex-col">
            <h4 className="text-2xl font-poppins font-semibold">
              {project.name}
            </h4>
            <p className="mt-2 text-slate-500">{project.description}</p>
            <div className="mt-4 flex items-center gap-2 font-poppins">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Live Link
              </a>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
