import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaGithub, FaGlobe} from "react-icons/fa6";
import ThumbnailOne from '../assets/TapeTrackr-Thumbnail.jpg';
import ThumbnailTwo from '../assets/Geepay-Thumbnail.jpg';
import ThumbnailThree from '../assets/FIFDA-Thumbnail.jpg';

const Projects = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    setDarkTheme(!DarkTheme);
  };

  return (
    <div
      className={`${
        DarkTheme && 'dark bg-card-gray text-text-color'
      }flex my-24 ml-80 justify-center  shadow-2xl shadow-zinc-800 overflow-y-hidden hover:overflow-y-auto relative w-3/5 h-4/5 rounded-xl`}
    >
      <h1 className="ml-5 my-3 text-3xl ">PROJECTS</h1>
      <div className='flex ml-5 my-20 gap-2'>
        
        {/* Card One */}
        <div className='flex flex-col mt-10'>
          <div className='w-60'>
            <img src={ThumbnailOne} alt='TapeTracker Image' className='rounded-t-xl' />
          </div>
          <div className='bg-slate-500 p-6 rounded-b-xl w-60'>
            <h2 className='text-2xl font-bold mb-4'>TapeTrackr</h2>
            <p className='text-lg'>This is a description of the project.</p>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
            <FaGlobe />
              Live Site
            </button>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
              <FaGithub />
              Github Repo
            </button>
          </div>
        </div>
        {/* Card Three */}
        <div className='flex flex-col '>
          <div className='w-60'>
            <img src={ThumbnailThree} alt='FIFDA Image' className='rounded-t-xl' />
          </div>
          <div className='bg-slate-500 p-6 rounded-b-xl w-60'>
            <h2 className='text-2xl font-bold mb-4'>FIFDA</h2>
            <p className='text-lg'>This is a description of the project.</p>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
            <FaGlobe />
              Live Site
            </button>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
            <FaGithub />
              Github Repo
            </button>
          </div>
        </div>
        {/* Card Three */}
        <div className='flex flex-col mt-10'>
          <div className='w-60'>
            <img src={ThumbnailTwo} alt='Geepay Image' className='rounded-t-xl' />
          </div>
          <div className='bg-slate-500 p-6 rounded-b-xl w-60'>
            <h2 className='text-2xl font-bold mb-4'>Geepay</h2>
            <p className='text-lg'>This is a description of the project.</p>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
            <FaGlobe />
              Live Site
            </button>
            <button className='flex items-center justify-center gap-2 text-xl mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold py-2 px-4 rounded-xl'>
            <FaGithub />
              Github Repo
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Projects;
