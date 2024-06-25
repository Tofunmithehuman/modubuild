import React from "react";
import Navigation from "../Components/Navigation";

function Home() {
  return (
    <div className="Home">
      <Navigation />

      <div className="ps-6 pe-6 lg:ps-4 lg:pe-0">
      <div className="sm:ps-12 max-w-screen-2xl m-auto">
        <div className="flex justify-between gap-10">
          <div className="sm:ms-[30px] max-w-lg pt-[200px]">
            <h1 className="font-bold text-2xl sm:text-5xl lg:w-[500px]">
              <span className="text-[#f6a13c]">Your</span> Trusted <br /> Construction{" "}
              <span className="text-[#f6a13c]">Partner</span>
            </h1>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">Delivering top-tier projects with quality, ensuring every detail exceed industry standards and client expectations, from initial design to final construction.</p>

            <div className="flex gap-6 sm:gap-20 mt-4 sm:mt-10 text-xs sm:text-base">
              <button className="bg-[#f6a13c] p-3 w-[120px] rounded-tl-3xl rounded-br-xl font-semibold">Explore</button>
              <button className="border border-[#f6a13c] border-4  w-[150px] rounded-tl-3xl rounded-br-3xl font-semibold">Contact Us</button>
            </div>

            <div className="flex sm:gap-20 justify-between mt-6 sm:mt-10 text-center">
              <div>
                <img src="/pattern.png" alt="pattern" className="absolute max-w-[20px] ms-4" />
                <h1 className="font-bold sm:text-2xl">2000</h1>
                <p className="text-gray-500 text-xs sm:text-sm w-[100px]">Projects done</p>
              </div>
              <div>
                <img src="/pattern.png" alt="pattern" className="absolute max-w-[20px] ms-4" />
                <h1 className="font-bold sm:text-2xl">1300</h1>
                <p className="text-gray-500 text-xs sm:text-sm w-[100px]">Building done</p>
              </div>
              <div>
                <img src="/pattern.png" alt="pattern" className="absolute max-w-[20px] ms-4" />
                <h1 className="font-bold sm:text-2xl">589+</h1>
                <p className="text-gray-500 text-xs sm:text-sm w-[100px]">Total employees</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="banner">
              <img src="/banner.png" alt="banner" className="min-h-[650px] min-w-[600px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl m-auto m-auto mt-20 mb-20">
        <ul className="flex items-center justify-evenly bg-gray-200 ps-4 pe-4 sm:ps-8 sm:pe-8 pt-6 pb-6 rounded-full text-xs sm:text-base">
          <li>Amazon</li>
          <li>Citibank</li>
          <li>Applepay</li>
          <li>Walmart</li>
          <li>Atlassin</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Home;
