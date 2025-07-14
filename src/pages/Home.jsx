import React from "react";
import pfp from "/p-1.jpeg";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import {
  MdWork,
  MdPerson,
  MdSearch,
  MdAttachMoney,
  MdVideocam,
} from "react-icons/md";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full max-h-screen">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto space-y-6 px-2 sm:px-4 md:px-6 lg:px-0">
        {/* Hero Card */}
        <div className="bg-[#1d1d1d] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
          <div className="w-full sm:w-64 h-40 sm:h-48 overflow-hidden rounded-2xl mb-4 sm:mb-0">
            <img
              src={pfp}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 items-center sm:items-start">
            <TypeWriter />
            <h1 className="text-white text-3xl sm:text-4xl font-bold text-center sm:text-left">SUMAN SAHA</h1>
            <p className="text-gray-400 text-center sm:text-left">An Innovative Creative Professional</p>
            <div className="flex gap-2 mt-4">
              <Link
                to="/contact"
                className="px-4 py-2 bg-[#252525] rounded-lg text-white hover:bg-[#2a2a2a] transition-all"
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
          {/* Check Latest Card */}
          <div className="bg-[#1d1d1d] rounded-2xl p-4 flex items-center justify-center text-white text-base sm:text-lg font-semibold hover:text-xl transition-all duration-700 cursor-pointer">
            <p className="">Check out our Latest Design trends and Projects</p>
          </div>

          {/* Service Icons */}
          <div className="bg-[#1d1d1d] rounded-2xl p-4 flex justify-evenly">
            {[
              {
                icon: <MdPerson />,
                label: "About",
                link: "/about",
              },
              {
                icon: <MdSearch />,
                label: "Search",
              },
              {
                icon: <MdAttachMoney />,
                label: "Pricing",
                link: "/pricing",
              },
            ].map((item, index) => (
              <Link
                to={item.link || "/"}
                key={index}
                className="flex flex-col items-center justify-center text-gray-400"
              >
                <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {/* Resume Card */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Resume</h3>
            <p className="text-gray-400 text-sm mb-4">MORE ABOUT ME</p>
            <div className="flex items-center justify-left gap-3">
              <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center">
                <MdWork className="text-white text-xl" />
              </div>

              <a
                href="/resume.pdf"
                download="SumanSaha_Resume.pdf"
                className="bg-[#252525] text-white px-4 py-2 rounded hover:bg-[#303030] transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Projects Card */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Projects</h3>
            <p className="text-gray-400 text-sm mb-4">SHOWCASE</p>
            <div className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center">
              <MdWork className="text-white text-xl" />
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4">Stay with me</h3>
            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <a
                href="https://github.com/Suman-byte8"
                className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center"
              >
                <FaGithub className="text-white text-xl" />
              </a>
              <a
                href="https://www.instagram.com/sum4.an/"
                className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="https://wa.me/+917797607126"
                className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/suman-saha-225958291/"
                className="w-10 h-10 bg-[#252525] rounded-lg flex items-center justify-center"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold text-xl sm:text-2xl">+02</h3>
            <p className="text-gray-400 text-sm">Years of Experience</p>
          </div>
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold text-xl sm:text-2xl">+10</h3>
            <p className="text-gray-400 text-sm">Projects Completed</p>
          </div>
          <div className="bg-[#1d1d1d] rounded-2xl p-6">
            <h3 className="text-white font-bold text-xl sm:text-2xl">+14</h3>
            <p className="text-gray-400 text-sm">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
