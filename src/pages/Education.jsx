import React, { useContext } from 'react'
import { ThemeContext } from "../ThemeContext";
import { FaUserGraduate } from "react-icons/fa6";

const Education = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);
  const changeTheme = () => {

    setDarkTheme(!DarkTheme);
  };

  return (
    <div
    className={`${
      DarkTheme && "dark bg-card-gray text-text-color"
    }flex  my-24 ml-80 justify-center bg-['#F8F8FF'] shadow-2xl shadow-zinc-800 overflow-y-hidden hover:overflow-y-auto relative w-3/5 h-4/5 rounded-xl `}
    >
      <div className="ml-10">
        <h1 className="text-3xl my-3">EDUCATION, TRAININGS & CERTIFICATION</h1>

        <div class="space-y-3 pt-5 mr-4 mb-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* <!-- Item #1 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FaUserGraduate />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2">
                <div class="text-xl ">B.Sc Management <br /> Information System</div>
                <time class="font-caveat bg-indigo-500 rounded-full px-2 font-medium text-white">
                  Jun 2016
                </time>
              </div>
              <div class="text-lg ">COVENANT UNIVERSITY</div>
             
            </div>
          </div>

          {/* <!-- Item #2 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FaUserGraduate />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-xl ">Diploma Frontend Engineering</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Current
                </time>
              </div>
              <div class="text-lg ">DevCareers</div>
              
            </div>
          </div>

          {/* <!-- Item #3 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FaUserGraduate/>
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-xl">Certified in Cybersecurity</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Mar 2024
                </time>
              </div>
              <div class="text-lg ">International Information System Security Certification Consortium</div>
              
            </div>
          </div>

          {/* <!-- Item #4 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FaUserGraduate/>
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-xl ">Diploma in Leadership Development</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                May 2015
                </time>
              </div>
              <div class="text-lg ">Covenant University</div>
              
            </div>
          </div>

          {/* <!-- Item #5 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <FaUserGraduate />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-4">
                <div class="text-xl ">Certificate in Computer Repairs <br /> & Maintainance</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                May 2011
                </time>
              </div>
              <div class="text-lg ">HIIT Computer Institute</div>
           
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education