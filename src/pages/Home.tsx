// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';

// function Home() {
//   return (
//     <div className="bg-background min-h-screen text-center">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }

// export default Home;

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import faceImage from '../assets/profile.jpg'; 

const data = {
  name: 'Han Thai',
  contentBelowName: 'I build things for the web.',
  majorSkill1: 'Software Engineer',
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex flex-col min-h-screen bg-[#FDEEEB] text-[#8C94C1] font-rounded"
    >
      {/* Floating Squares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-6 h-6 bg-[#e2b9bd] opacity-50 rounded-md top-10 left-10 animate-float-slow"></div>
        <div className="absolute w-8 h-8 bg-[#B3A1E6] opacity-50 rounded-md bottom-20 right-10 animate-float-slow"></div>
        <div className="absolute w-5 h-5 bg-[#E9A7B3] opacity-50 rounded-md top-1/2 left-1/4 animate-float-slow"></div>
        <div className="absolute w-7 h-7 bg-[#D4C7F2] opacity-50 rounded-md bottom-1/4 right-1/4 animate-float-slow"></div>
        <div className="absolute w-10 h-10 bg-[#CE7E9E] opacity-50 rounded-md top-1/4 right-1/4 animate-float-slow"></div>
        <div className="absolute w-9 h-9 bg-[#A480CF] opacity-50 rounded-md bottom-3/4 left-1/6 animate-float-slow"></div>
      {/* Add more if you want */}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4 py-16">
        <div>
          <img
            src={faceImage}
            alt="Han's profile"
            className="w-45 h-45 rounded-full object-cover border-softWhite shadow mb-6"
            style={{ objectPosition: '50% 2%' }}
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
          I'm a{' '}
          <span className="font-semibold text-[#A480CF]">
            {data.majorSkill1}
          </span>{' '}
          specialized in building exceptional websites.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] text-[#F7F7F7] rounded-full shadow hover:scale-105 transition-transform"
        >
          Hire Me
        </Link>

        {/* Social Links */}
        <div className="fixed top-1/2 left-4 transform -translate-y-1/2 flex flex-col gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D4C7F2] text-[#F7F7F7] hover:bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D4C7F2] text-[#F7F7F7] hover:bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 rounded-md bg-[#D4C7F2] text-[#F7F7F7] hover:bg-gradient-to-r from-[#E9A7B1] to-[#B3A1E6] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

    </motion.div>
  );
}
