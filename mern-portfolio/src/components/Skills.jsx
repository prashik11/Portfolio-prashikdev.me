import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Globe,
  TestTube2,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      icon: <Code2 />,
    },
    {
      name: "JavaScript",
      category: "Language",
      icon: <Code2 />,
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <Server />,
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <Server />,
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: <Database />,
    },
    {
      name: "Java",
      category: "Programming",
      icon: <Code2 />,
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      icon: <GitBranch />,
    },
    {
      name: "REST API",
      category: "Backend",
      icon: <Globe />,
    },
    {
      name: "Selenium",
      category: "Automation",
      icon: <TestTube2 />,
    },
    {
      name: "GraphQL",
      category: "Backend",
      icon: <Globe />,
    },
    {
      name: "MySQL",
      category: "Database",
      icon: <Database />,
    },
    {
      name: "JMeter",
      category: "Performance",
      icon: <TestTube2 />,
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>MY TECHNOLOGIES</p>

        <h2>
          Technical <span>Skills</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="skill-icon">{skill.icon}</div>

            <div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
