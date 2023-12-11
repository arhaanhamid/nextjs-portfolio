"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Personal Portfolio",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/nextjs-portfolio",
    previewUrl: "https://github.com/arhaanhamid",
  },
  {
    id: 2,
    title: "Share Prompts",
    description: "Find and Share exceptional prompts",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/share-prompts",
    previewUrl: "https://share-prompts-indol.vercel.app",
  },
  {
    id: 3,
    title: "Solo Leveling",
    description: "Top-Down Prespective Action Game",
    image: "/images/projects/2.png",
    tag: ["All", "Application"],
    gitUrl: "https://github.com/arhaanhamid/sololeveling_javafx_game",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Quiz Me",
    description: "An quiz/trivia webapp to test your knowledge",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/quiz-me_react",
    previewUrl: "https://quiz-me-react.vercel.app/",
  },
  {
    id: 5,
    title: "Tenzies",
    description: "Tenzies based game made using react",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/tenzies-game_react",
    previewUrl: "https://tenzies-game-react-ochre.vercel.app/",
  },
  {
    id: 6,
    title: "BlackBoxes",
    description: "A simple webapp puzzle game made using react",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/quiz-me_react",
    previewUrl: "https://blackboxes-game-react.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Application"
          isSelected={tag === "Application"}
        />
      </div>

      <ul
        ref={ref}
        className="grid md:grid-cols-2 md:gap-20 lg:grid-cols-3 lg:gap-12 gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
