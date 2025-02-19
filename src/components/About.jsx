import profile from "../assets/images/profile.png";
import "../App.css";

export default function About() {
// Ensure that the dark mode class is being toggled on a parent element
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img
            src={profile}
            alt="Michael Sia"
            className="w-64 h-64 rounded-full object-cover shadow-xl border-4 border-indigo-100 dark:border-gray-700"
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I’m a passionate Web Developer from Manila, Philippines, specializing in modern
              frontend technologies like React, Vite, and Tailwind CSS. I focus on building
              fast, intuitive, and visually appealing web experiences.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}