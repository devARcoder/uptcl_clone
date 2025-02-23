import React from "react";
import help from "./Assets/hero_icons/help.svg";
import add from "./Assets/hero_icons/add.svg";
const Hero = () => {
  return (
    <>
      <div class="flex justify-between items-center mt-1 bg-orange-500 h-40 w-full text-white pb-8">
        <div className="side1 flex flex-col justify-start items-start space-y-1 py-2 px-6">
          <h1 className="text-2xl font-semibold">abdur razzaq</h1>
          <p className="text-xl text-gray-100">03304987789</p>
          <p className="text-[18px] text-gray-100 py-1">Super Sasta 50</p>
        </div>
        <div className="side2 flex flex-col justify-start items-start space-y-1 py-2 px-6">
          <div className="flex justify-start items-center text-center space-x-3">
            <h1 className="text-2xl font-semibold">
              Rs 33.<span className="text-xl">6</span>
            </h1>
            <img className="w-7 h-7" src={help} alt="" />
          </div>
          <p className="text-[15px] text-gray-100">Validity: 19-02-2026</p>
          <div className="">
            <div className="bg-gray-800 text-white px-3 py-0.5 text-center flex items-center space-x-2 border border-white mt-1">
              <p className="text-[16px]">RECHARGED</p>
              <img className="w-7 h-7" src={add} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="mb-10 text-center">
          <div className="circle1 border-4 border-stone-300 px-6 py-3 rounded-full text-center ">
            <h1 className="text-xl font-bold text-orange-500">0</h1>
            <h2 className="text-xl font-semibold text-orange-500">MINS</h2>
            <p className="text-[18px] font-semibold text-orange-500">0</p>
          </div>
          <h1 className="text-[18px] font-bold text-stone-500 py-2">Calls</h1>
        </div>
        <div className="mt-14 text-center">
          <div className="2 border-4 border-b-orange-500 border-4 border-l-stone-400 border-l-4 border-orange-500 px-12 py-8 rounded-full text-center">
            <h1 className="text-[25px] font-bold text-orange-500">16.68</h1>
            <h2 className="text-2xl font-semibold text-orange-500">GB</h2>
            <p className="text-[22px] font-semibold text-gray-500">20.0</p>
          </div>
          <h1 className="text-[18px] font-bold text-stone-500 py-2">
            Internet
          </h1>
        </div>
        <div className="mb-10 text-center">
          <div className="circle3 border-4 border-stone-300 px-6 py-3 rounded-full text-center">
            <h1 className="text-xl font-bold text-orange-500">0</h1>
            <h2 className="text-xl font-semibold text-orange-500">MINS</h2>
            <p className="text-[18px] font-semibold text-orange-500">0</p>
          </div>
          <h1 className="text-[18px] font-bold text-stone-500 py-2">SMS</h1>
        </div>
      </div>
      <div className="flex justify-end items-center mx-2">
        <p className="text-center text-xl">
          Details
          <span className="bg-black text-white rounded-full px-2 py-0.5 ">
            &rarr;
          </span>
        </p>
      </div>
    </>
  );
};

export default Hero;
