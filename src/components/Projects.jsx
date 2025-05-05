import ProjectData from "../data/projects.json";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../index.css";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="projects-card group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-6 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-bold mb-2 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.summary}
            </p>

            {/* Tech stack logos */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech?.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-sm text-gray-700 dark:text-gray-200"
                >
                  <img src={tool.icon} alt={tool.name} className="w-4 h-4" />
                  {tool.name}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.demo}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink /> Demo
              </a>
              <a
                href={project.code}
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
