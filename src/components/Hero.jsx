import { motion } from "framer-motion";
import Logo from "./Logo"; // Import the Logo component
import "../App.css";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
};

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black dark:to-gray-900 px-4 py-24 transition-all duration-300">
      <div className="text-center">
        <Logo /> {/* Include the Logo component */}
        <motion.h1 
          initial="initial" 
          animate="animate" 
          variants={fadeIn} 
          className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Michael Sia
        </motion.h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Full-Stack Developer
        </p>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          Building fast, responsive, and user-friendly web apps with React,Next.js,Typescript, Node.js Vite, and Tailwind CSS.
        </p>
        <div className="flex gap-4 mt-8 justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-all">
            <a href="#projects">View My Work</a>
          </button>
          {/*<button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 rounded-lg transition-all dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white">
            <a href="/resume.pdf" download>Download Resume</a>
          </button>*/}
        </div>
      </div>
    </section>
  );
}
