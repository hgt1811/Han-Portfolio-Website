import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import faceImage from "../assets/profile.jpg";
import FloatingSquares from "../components/FloatingSquares";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";

const data = {
  name: "Han Thai",
  contentBelowName: "I build things for the web.",
  majorSkill1: "Software Engineer",
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col min-h-screen bg-[#FDEEEB] text-[#8C94C1] font-rounded"
    >
      {/* Floating Squares Background */}
      <FloatingSquares />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-16">
        <div>
          <img
            src={faceImage}
            alt="Han's profile"
            className="w-45 h-45 rounded-full object-cover mb-6 hover:shadow-lg hover:shadow-fuchsia-900"
            style={{ objectPosition: "50% 2%" }}
          />
        </div>

        <p className="text-[#A480CF] text-lg">My name is</p>
        <div className="mb-4">
          <h1 className="text-5xl font-bold text-[#A480CF] gradient__text">
            <Typewriter
              options={{
                strings: [data.name],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <h3 className="text-[#CE7E9E]">{data.contentBelowName}</h3>
        </div>

        <p className="max-w-xl text-lg">
          I'm a{" "}
          <span className="font-semibold text-[#A480CF]">
            {data.majorSkill1}
          </span>{" "}
          specialized in building exceptional websites.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] text-[#F7F7F7] rounded-full shadow hover:scale-105 transition-transform"
        >
          Hire Me
        </Link>

        {/* Social Links */}
        <SocialLinks />
      </div>
    </motion.div>
  );
}
