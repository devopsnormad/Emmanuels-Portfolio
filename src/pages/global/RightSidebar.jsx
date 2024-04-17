import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { FaSuitcase, FaUserGraduate } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const RightSidebar = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };

  return (
    <div
      className={`${
        DarkTheme && "dark bg-sidebar-gray text-text-color"
      }flex h-1/2 bg-['#F8F8FF']  fixed top-0 right-0 w-20 my-52 mx-10 rounded-full shadow-2xl shadow-zinc-900   flex-col items-center justify-center`}
    >
      <div className="flex gap-6 flex-col mt-14">
        <Link
          to="/home"
          className="flex flex-col items-center hover:bg-green-400 hover:rounded-xl hover:m-2 hover:text-text-color hover:w-16 hover:h-12 hover:pt-1 transition-colors duration-200"
        >
          <FaHome />
          Home
        </Link>
        <Link
          to="/experience"
          className="flex flex-col items-center hover:bg-green-400 hover:rounded-xl hover:m-2 hover:text-text-color hover:w-16 hover:h-12 hover:pt-1 transition-colors duration-200"
        >
          <FaSuitcase />
          Experience
        </Link>
        <Link
          to="/skills"
          className="flex flex-col items-center hover:bg-green-400 hover:rounded-xl hover:m-2 hover:text-text-color hover:w-16 hover:h-12 hover:pt-1 transition-colors duration-200"
        >
          <GiSkills />
          Skills
        </Link>
        <Link
          to="/education"
          className="flex flex-col items-center hover:bg-green-400 hover:rounded-xl hover:m-2 hover:text-text-color hover:w-16 hover:h-12 hover:pt-1 transition-colors duration-300"
        >
          <FaUserGraduate />
          Education
        </Link>
        <Link
          to="/projects"
          className="flex flex-col items-center hover:bg-green-400 hover:rounded-xl hover:m-2 hover:text-text-color hover:w-16 hover:h-12 hover:pt-1 transition-colors duration-200"
        >
          <PiProjectorScreenChartFill />
          Projects
        </Link>
      </div>
    </div>
  );
};

export default RightSidebar;
