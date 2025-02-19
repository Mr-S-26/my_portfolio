import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModeToggle";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <DarkModeToggle />
      <LanguageToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;