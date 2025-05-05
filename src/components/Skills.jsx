import { FaReact, FaNodeJs, FaDatabase, FaTools } from "react-icons/fa";
import PropTypes from "prop-types";
import "../App.css";

const SkillCard = ({ icon, title, items }) => (
  <div className="skills-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-gray-600">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const skills = {
    frontend: ["React", "JavaScript", "Vite", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Express"],
    databases: ["PostgreSQL"],
    tools: ["Git", "VS Code"],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            icon={<FaReact className="text-2xl text-indigo-600" />}
            title="Frontend"
            items={skills.frontend}
          />
          <SkillCard
            icon={<FaNodeJs className="text-2xl text-green-600" />}
            title="Backend"
            items={skills.backend}
          />
          <SkillCard
            icon={<FaDatabase className="text-2xl text-blue-600" />}
            title="Databases"
            items={skills.databases}
          />
          <SkillCard
            icon={<FaTools className="text-2xl text-gray-600" />}
            title="Tools"
            items={skills.tools}
          />
        </div>
      </div>
    </section>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
};