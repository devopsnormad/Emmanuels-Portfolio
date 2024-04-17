import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FaHtml5, FaSass, FaReact, FaGitAlt } from "react-icons/fa6";
import { DiCss3, DiDotnet } from "react-icons/di";
import { IoLogoJavascript, IoLogoFirebase, IoLogoFigma } from "react-icons/io5";
import { MdTroubleshoot } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { MdOutlineStar } from "react-icons/md";
import { SiMicrosoftazure, SiAdobeillustrator } from "react-icons/si";

const Skills = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };

  const renderStars = (brightStars) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <MdOutlineStar
        key={index}
        className={`text-xl ${
          index < brightStars ? "text-yellow-500" : "text-gray-500"
        }`}
      />
    ));
  };
  return (
    <div
      className={`${
        DarkTheme && "dark bg-card-gray text-text-color"
      } my-24 ml-80 justify-center bg-['#F8F8FF'] shadow-2xl shadow-zinc-800  relative w-3/5 h-4/5 rounded-xl `}
      >
      <div className=" ">
        <div className="py-3 px-10 text-2xl">SKILLS</div>
        <div className="flex justify-between">
        <div className="py-2 px-10 space-y-10">
        <div className="">
          HTML
          <div className="flex items-center gap-4">
            <FaHtml5 className="text-3xl  text-blue-500 hover:filter hover:drop-shadow" />
            {renderStars(5)}
          </div>
        </div>
        <div>
          CSS
          <div className="flex items-center gap-4">
            <DiCss3 className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          SASS
          <div className="flex items-center gap-4">
            <FaSass className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          JAVASCRIPT
          <div className="flex items-center gap-4">
            <IoLogoJavascript className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          REACT
          <div className="flex items-center gap-4">
            <FaReact className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          C# .NET FRAMEWORK
          <div className="flex items-center gap-4">
            <DiDotnet className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        </div>
        <div className="py-2 px-10 space-y-10">
        <div>
          MYSQL
          <div className="flex items-center gap-4">
            <GrMysql className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          FIREBASE
          <div className="flex items-center gap-4">
            <IoLogoFirebase className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          GIT
          <div className="flex items-center gap-4">
            <FaGitAlt className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          MS AZURE
          <div className="flex items-center gap-4">
            <SiMicrosoftazure className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          FIGMA
          <div className="flex items-center gap-4">
            <IoLogoFigma className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
        <div>
          ADOBE ILLUSTRATOR
          <div className="flex items-center gap-4">
            < SiAdobeillustrator className="text-3xl" />
            {renderStars(4)}
          </div>
        </div>
       
        <div className="text-lg">
          IT SUPPORT
          <div className="flex items-center gap-4">
            <MdTroubleshoot className="text-3xl" />
             {renderStars(4)}
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
