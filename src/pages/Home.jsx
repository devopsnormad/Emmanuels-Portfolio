import React from "react";
import BackgroundImage from "../assets/Background-Image.png";
import TextRotate from "../components/TextRotate";

const Home = () => {
  return (
    <div
      className="flex  my-24 ml-80 justify-center items-center bg-slate-400 relative w-3/5 h-4/5 rounded-xl "
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex flex-col items-center justify-center mt-40 gap-3">
        <h1 className="text-5xl">Hi! <span className="text-green-500">I'm Emmanuel Doji</span></h1>
        <div className="secondline text-3xl ">
          I'm a
          <TextRotate
            dataRotate={[
              " Frontend Developer.",
              " Systems Analyst.",
              " Technical Writer.",
            ]}
            period={1200}
            className="text-green-500"
          />
          <span className="slash text-green-500">|</span>
        </div>
        <div className="flex items-center justify-center ">
        <button className='flex items-center justify-center gap-2 text-xl py-2 px-20 mt-4 w-full bg-green-400 hover:bg-transparent hover:outline hover:outline-1 hover:outline-green-400 hover:rounded-none hover:text-text-color font-bold  rounded-xl'>
          View My CV
      </button>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
