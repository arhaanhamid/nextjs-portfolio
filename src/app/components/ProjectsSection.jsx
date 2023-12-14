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
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/nextjs-portfolio",
    previewUrl: "https://github.com/arhaanhamid",
  },
  {
    id: 2,
    title: "Share Prompts",
    description: "Find and Share exceptional prompts",
    image: "/images/projects/share_prompts.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/share-prompts",
    previewUrl: "https://share-prompts-indol.vercel.app",
  },
  {
    id: 3,
    title: "Solo Leveling",
    description: "Top-Down Prespective Action Game",
    image: "/images/projects/solo_leveling.jpg",
    tag: ["All", "Application"],
    gitUrl: "https://github.com/arhaanhamid/sololeveling_javafx_game",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Quiz Me",
    description: "An quiz/trivia webapp to test your knowledge",
    image: "/images/projects/quiz_me.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/quiz-me_react",
    previewUrl: "https://quiz-me-react.vercel.app/",
  },
  {
    id: 5,
    title: "Tenzies",
    description: "Tenzies based game made using react",
    image: "/images/projects/tenzies_game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/tenzies-game_react",
    previewUrl: "https://tenzies-game-react-ochre.vercel.app/",
  },
  {
    id: 6,
    title: "BlackBoxes",
    description: "A simple webapp puzzle game made using react",
    image: "/images/projects/black_boxes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/blackboxes-game_react",
    previewUrl: "https://blackboxes-game-react.vercel.app/",
  },
  {
    id: 7,
    title: "Meme Generator",
    description:
      "Generate your own memes using this meme generator made using react",
    image: "/images/projects/meme_generator.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/arhaanhamid/Meme-Generator_react",
    previewUrl: "https://meme-generator-react-psi.vercel.app/",
  },
  {
    id: 8,
    title: "URL Shortener",
    description:
      "Shorten your long urls for free and keep them easy to remember.",
    image: "/images/projects/api.png",
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/arhaanhamid/url-shortener-microservice",
    previewUrl: "https://url-shortener-k8ej.onrender.com/",
  },
  {
    id: 9,
    title: "Exercise Tracker",
    description: "Track you daily exercise and keep a log of them.",
    image: "/images/projects/api.png",
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/arhaanhamid/exercise-tracker-microservice",
    previewUrl: "https://exercise-tracker-microservice-if04.onrender.com/",
  },
  {
    id: 10,
    title: "File Metadata",
    description: "Upload a file and get its metadata.",
    image: "/images/projects/api.png",
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/arhaanhamid/file-metadata-microservice",
    previewUrl: "https://file-metadata-microservice-p536.onrender.com/",
  },
  {
    id: 11,
    title: "Request Header Parser",
    description: "Get the header data of any request.",
    image: "/images/projects/api.png",
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/arhaanhamid/request-header-parser-microservice",
    previewUrl: "https://request-header-parser-microservice-cjqj.onrender.com/",
  },
  {
    id: 12,
    title: "TImestamp Microservice",
    description: "Write any date in the url and get its proper timestamp.",
    image: "/images/projects/api.png",
    tag: ["All", "Web", "Microservices"],
    gitUrl: "https://github.com/arhaanhamid/timestamp-microservice",
    previewUrl: "https://timestamp-microservice-85un.onrender.com/",
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

      <div className="text-white flex flex-wrap flex-row justify-center items-center gap-2 py-6">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Microservices"
          isSelected={tag === "Microservices"}
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
