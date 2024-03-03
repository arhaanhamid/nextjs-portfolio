import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  tech,
  gitUrl,
  previewUrl,
}) => {
  const getRandomColor = () => {
    const colors = [
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 255)",
      "rgb(255, 165, 0)", // Orange
      "rgb(128, 0, 128)", // Purple
      "rgb(255, 0, 255)", // Magenta
      "rgb(128, 128, 0)", // Olive
      "rgb(0, 128, 128)", // Teal
      "rgb(128, 0, 0)", // Maroon
      "rgb(0, 128, 0)", // Green
      "rgb(0, 0, 128)", // Navy
      // Add more colors to the array as needed
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div>
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      {tech.map((item, index) => {
        const randomColor = getRandomColor();
        return (
          <div
            className="inline-block whitespace-nowrap rounded-full bg-sky-50 px-[0.7em] py-[0.3em] text-center align-baseline text-[0.75em] font-bold leading-none  mr-2 my-3"
            key={index}
          >
            <span style={{ color: randomColor }}>{item}</span>
          </div>
        );
      })}

      <div className="text-white rounded-b-xl bg-[#181818] py-3 px-2">
        <h5 className="text-3xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
