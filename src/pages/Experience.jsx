import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { HiBriefcase } from "react-icons/hi";

const Experience = () => {
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
        <h1 className="text-3xl my-3">Experience</h1>

        <div class="space-y-3 mr-4 mb-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {/* <!-- Item #1 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2">
                <div class="text-xl ">Front-End Engineering Student</div>
                <time class="font-caveat bg-indigo-500 rounded-full px-2 font-medium text-white">
                  Sept 2023
                </time>
              </div>
              <div class="text-lg ">DevCareers</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* <!-- Item #2 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-2xl ">Software Developer</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Jan 2022 - Jun 2023
                </time>
              </div>
              <div class="text-lg ">Nigerian Maritime Administration and Safety Agency</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* <!-- Item #3 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-2xl">System Analyst</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Nov 2021 - Jun 2023
                </time>
              </div>
              <div class="text-lg ">Nigerian Maritime Administration and Safety Agency</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* <!-- Item #4 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-2xl ">FrontEnd Developer</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Jan 2023 - May 2023
                </time>
              </div>
              <div class="text-lg ">Justice Watch</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* <!-- Item #5 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-4">
                <div class="text-2xl ">IT Officer</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Jan 2021 - Aug 2021
                </time>
              </div>
              <div class="text-lg ">Action Energy Limited</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>

          {/* <!-- Item #6 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-2xl ">FrontEnd Developer</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Jun 2019 - Dec 2019
                </time>
              </div>
              <div class="text-lg ">NA-Haske Limited</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
          {/* <!-- Item #7 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-4">
                <div class="text-2xl ">Technical Support</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Dec 2015 - Jun 2016
                </time>
              </div>
              <div class="text-lg ">Firm foundation and Dominion Academy</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
          {/* <!-- Item #8 --> */}
          <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* <!-- Icon --> */}
            <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <HiBriefcase />
            </div>
            {/* <!-- Card --> */}
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 rounded border border-slate-200 shadow">
              <div class="flex items-center justify-between space-x-2 mb-1">
                <div class="text-2xl ">I.T Support Intern</div>
                <time class="font-caveat  bg-indigo-500 rounded-full px-2 font-medium text-white">
                Feb 2014 - Jul 2014
                </time>
              </div>
              <div class="text-lg ">National Space Research & Development Agency</div>
              <div class="text-slate-500">
                Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
                morbi blandit cursus risus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
