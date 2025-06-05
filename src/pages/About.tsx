import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import faceImage from "../assets/profile.jpg";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiAdobexd,
  SiCss3,
} from "react-icons/si";
import FloatingSquares from "../components/FloatingSquares";
import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col min-h-screen bg-[#FDEEEB] text-[#8C94C1] font-rounded"
    >
      {/* Navbar */}
      <Navbar />

      {/* Floating Squares Background */}
      <FloatingSquares />

      {/* Responsive flex container */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-around gap-5 z-10 px-7 py-3">
        {/* Left: Text */}
        <div className="max-w-xl text-left">
          <h2 className="text-5xl font-bold text-primary mb-6 text-center md:text-left">
            About
          </h2>
          <p className="mb-4 text-lg">
            Hi. I’m Han, a Software Engineer with a knack for crafting elegant
            web applications. With years of experience in design and
            development, I thrive on building things that are not only
            functional but delightful to use.
          </p>
          <p className="mb-4 text-lg">
            I have a passion for creative UIs and human-centered design. Here
            are a few technologies and design tools I’ve been working with
            recently:
          </p>

          {/* Tech stack icons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {[
              SiCss3,
              SiJavascript,
              SiTypescript,
              SiNodedotjs,
              SiReact,
              SiTailwindcss,
              SiFigma,
              SiAdobexd,
            ].map((Icon, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-[#FADADD] rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform duration-200"
              >
                <Icon size={24} className="text-[#A480CF]" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-40 h-45 md:w-70 md:h-80 rounded-full overflow-hidden ring-15 ring-[#e4d1ef] ring-offset-10 ring-offset-[#FDEEEB] ring-opacity-20">
            <img
              src={faceImage}
              alt="Han's profile"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 2%" }}
            />
          </div>
        </div>
      </div>

      {/* Coding Profiles */}
      <div className="relative z-10 mt-12 px-10 py-3 mb-10">
        <h3 className="text-2xl font-extrabold text-[#A480CF] text-left mb-6">
          Coding Profiles
        </h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-[#FDEEEB] border-2 rounded-xl p-4 w-full md:w-1/2 ">
            <p>
              <strong>thaigiahan72</strong> &nbsp; 631 Solved |
              <span className="ml-2">easy: 301</span>
              <span className="ml-2">medium: 320</span>
              <span className="ml-2">hard: 51</span>
            </p>
          </div>
          <div className="bg-[#FDEEEB] border-2 rounded-xl p-4 w-full md:w-1/2">
            <p>
              <strong>hgt1811</strong> &nbsp; public repository: 22
            </p>
          </div>
        </div>

        {/* Social Links */}
        < SocialLinks />
      </div>
    </motion.div>
  );
}
