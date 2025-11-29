"use client";

import React, { useState, useEffect } from 'react';
import { ParticleSphere } from '@/model/particle-sphere';
import { motion } from "framer-motion";

const Hero = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentTime = time.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });
  
  console.log(currentTime);
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@stavrossymeonidis.dev");
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <main className="h-screen w-full mx-auto relative overflow-hidden flex items-center justify-center flex-col">

      <section className="sphere_background h-full w-full">
        <div className="w-full h-full bg-transparent"></div>
        {/* <ParticleSphere /> */}
      </section>

      <div className="hero_title w-full h-full flex items-center justify-center pointer-events-none">
        <h1 className="w-[70%] leading-[130px] text-5xl md:text-[10rem]  font-bold text-left absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          Precision
          <br />Coding
        </h1>
      </div>

      <div className="flex-1 flex items-center mt-16 w-full px-16 py-10">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-8 px-16 items-center w-full">

            {/* description grid */}
            <div className="flex items-center justify-end order-2 w-full">
              <p className="font-body font-light text-[18px] text-[#b3b3b3] leading-relaxed text-left">Practical full-stack developer
                <br /> who blends solid engineering
                <br /> with real-world business insight.</p>
            </div>

            {/* button grid */}
            <div className="flex flex-col gap-3 justify-start items-start order-1 w-full">
              <div className="flex flex-col gap-3 w-fit">
                <motion.button
                  className="relative overflow-hidden font-heading z-10 cursor-pointer text-sm pl-6 rounded-full glass-texture flex items-center justify-between"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <div
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-[34px] rounded-full cursor-glass-effect"
                    style={{ transformOrigin: "right center", width: "34px" }}
                  ></div>
                  <span
                    className="relative z-10 mt-1"
                    style={{ color: "rgb(242, 242, 242)" }}
                  >
                    let's connect
                  </span>
                  <div
                    className="relative z-10 rounded-full p-1 m-1"
                    style={{ transform: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right w-6 h-6 text-[#f2f2f2]"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </motion.button>
                <div className="flex items-center gap-2">
                  <button
                    className="transition-opacity p-1 hover:bg-accent rounded z-10 cursor-pointer"
                    aria-label="Copy email address"
                    onClick={handleCopyEmail}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-copy w-4 h-4 text-[#b3b3b3] hover:text-foreground"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2"></path>
                    </svg>
                  </button>
                  <span className="font-body font-light text-base text-[#b3b3b3]">
                    sumansahaweb.dev@gmail.com
                  </span>
                </div>
                {toastVisible && (
                  <div className="absolute top-4 right-4 bg-[#333] text-white px-4 py-2 rounded shadow-md">
                    Copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timezone Details */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center justify-center gap-2 text-sm font-body text-[#b3b3b3] whitespace-nowrap">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full" style={{ transform: "scale(1.0894)" }}>
            </div>
            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full" style={{ transform: "scale(1.44699)" }}>
            </div>
          </div>
          <div className="flex items-center gap-2 md:hidden text-xs font-light">
            <span>India Based</span>
            <span>•</span>
            <span>Available everywhere</span>
            <span>•</span>
            <span>{currentTime}</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span>Available now</span>
            <span>•</span>
            <span>India</span>
            <span>•</span>
            <span>{currentTime}</span>
            <span>•</span>
            <span>Global projects welcome</span>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Hero;