"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-xl">
        <li>Javascript</li>
        <li>Core Java</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>SpringBoot</li>
        <li>TailwindCSS</li>
        <li>Tailwind UI Libraries</li>
        <li>CSS</li>
        <li>MaterialUI, Bootstrap etc</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors of Science in Information Technology (B.Sc IT)</li>
        <li>Masters of Science in Information Technology (M.Sc IT)</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Google App Script Developer at Zillion Analytics</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap:16 sm:py-16 xl:px-16">
        <Image src="/images/dp.png" width={500} height={600} alt="" />
        {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/me.png"
            alt="avatar"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={500}
          />
        </div> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {`🚀 Hi, I'm Suham, a passionate full-stack web developer fueled by an
            insatiable hunger for learning. From crafting seamless front-end
            experiences to architecting robust back-end solutions, I thrive on
            the dynamic challenges of the digital realm. Embracing every
            opportunity to grow, I navigate the evolving landscape of technology
            with creativity and precision. Let's collaborate and turn innovative
            ideas into impactful digital realities. 🌐💻✨`}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
