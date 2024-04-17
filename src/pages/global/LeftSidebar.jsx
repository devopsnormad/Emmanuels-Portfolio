import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { FaGithub, FaLinkedin, FaMedium, FaHashnode } from "react-icons/fa6";
import { MdAlternateEmail, MdLocationOn } from "react-icons/md";
import ProfilePicture from "../../assets/profile-pic.png";

const LeftSidebar = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };

  return (
    <div
      className={`leftSidebar ${
        DarkTheme && "dark bg-sidebar-gray text-text-color"
      } fixed bg-['#F8F8FF']  shadow-2xl shadow-zinc-900 top-0 left-0 h-1/2 w-64 my-52 mx-10 rounded-3xl flex flex-col items-center justify-center`}
    >
      {/* Profile Picture */}
      <div className="relative" style={{ top: "-50%" }}>
        <img
          src={ProfilePicture}
          alt="My Picture"
          className="rounded-full w-24"
        />
      </div>
      {/* Identity and Socials */}
      <div className="absolute top-1/2 transform -translate-y-1/2 ">
        {/* Identity */}
        <div className="mb-14 ">
          <h1 className="text-center text-3xl">Emmanuel Doji</h1>
          <span className="flex items-center gap-2 text-xl">
            <MdLocationOn />
            <h2>Jos, Plateau State, Nigeria</h2>
          </span>

          <a
            href="mailto:dojiemma@gmail.com"
            className="flex items-center gap-2 text-xl  hover:text-blue-500"
          >
            <MdAlternateEmail />
            <h2>dojiemma@gmail.com</h2>
          </a>
        </div>

        {/* Light and Dark Mode Toogle */}
        <div className="mb-12 flex justify-center">
          <label class="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              class={`sr-only peer input ${
                DarkTheme ? "Lightmode" : "Darkmode"
              }`}
              onClick={changeTheme}
            />
            <div class="relative w-11 h-6 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
        {/* Socials */}
        <div className="">
          <a
            href="https://github.com/devopsnormad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl hover:text-blue-500"
          >
            <FaGithub />
            <h2>Github</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-doji/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl  hover:text-blue-500"
          >
            <FaLinkedin />
            <h2>LinkedIn</h2>
          </a>
          <a
            href="https://medium.com/@dojiemma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl  hover:text-blue-500"
          >
            <FaMedium />
            <h2>Medium</h2>
          </a>
          <a
            href="https://emmanueldoji.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xl hover:text-blue-500"
          >
            <FaHashnode />
            <h2>Hashnode</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
