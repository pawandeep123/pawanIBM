import React from "react";

import logo from "../../src/images/logohati.png";
import imageURL from "../../src/images/post-one.webp";
const LeadGen = () => {
  return (
    <div>
      <div className="bg-black w-full   h-screen">
        <div>
          <img src={logo} alt="" className="  rounded-full  m-4 mt-4   " />
          <div className="flex justify-center   ">
            <div className="relative   h-screen    ">
              <div
                className="absolute top-0 left-0   bg-cover h-[500px] w-[600px] "
                style={{
                  backgroundImage: `url(${imageURL}) `,
                }}
              >
                <div className="flex   gap-5 border  text-white  bg-[#ee1d26] h-16 p-2">
                  <img src={logo} alt="" className="     h-12 w-12  " />

                  <ul className="flex gap-5  pt-3">
                    <li>HOME </li>
                    <li>ABOUT US</li>
                    <li>SERVICE</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                  </ul>
                </div>

                <div>
                  <p className=" text-2xl  font-bold mt-20">
                    Welcome To Ghati Solution
                  </p>
                  <h1 className=" text-5xl font-bold">
                    Social Media Market Service
                  </h1>
                </div>
              </div>
              <div
                className="absolute top-0 right-0   bg-cover h-[500px] w-[600px] "
                style={{
                  backgroundImage: `url(${imageURL}) `,
                }}
              >
                <div className="flex   gap-5 border  text-white  bg-[#ee1d26] h-16 p-2">
                  <img src={logo} alt="" className="     h-12 w-12  " />

                  <ul className="flex gap-5  pt-3">
                    <li>HOME </li>
                    <li>ABOUT US</li>
                    <li>SERVICE</li>
                    <li>PORTFOLIO</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                  </ul>
                </div>

                <div>
                  <p className=" text-2xl  font-bold mt-20">
                    Welcome To Ghati Solution
                  </p>
                  <h1 className=" text-5xl font-bold">
                    Social Media Market Service
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadGen;
