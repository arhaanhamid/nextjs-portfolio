"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>NextJS</li>
        <li>GatsbyJS</li>
        <li>GraphQL</li>
        <li>NodeJS</li>
        <li>ExpressJS</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>AWS</li>
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
        <Image src="/images/about-me.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software engineer with a passion for learning new
            technologies and developing new projects. I have a strong background
            in computer science and a strong interest in web development. I am
            currently looking for opportunities to work in the field of web
            development.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              {" "}
              Experience{" "}
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
