import { motion } from "framer-motion";
import { Code2, Database, Server, Monitor } from "lucide-react";

function About() {
  const cards = [
    {
      icon: <Monitor size={28} />,
      title: "Frontend",
      text: "Building responsive and modern user interfaces with React.js.",
    },
    {
      icon: <Server size={28} />,
      title: "Backend",
      text: "Developing REST APIs and backend applications with Node.js and Express.js.",
    },
    {
      icon: <Database size={28} />,
      title: "Database",
      text: "Working with MongoDB to design and manage application data.",
    },
    {
      icon: <Code2 size={28} />,
      title: "Full Stack",
      text: "Connecting frontend, backend and database into complete web applications.",
    },
  ];

  return (
    <section id="about" className="section about-section">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>MERN Stack Developer</h3>

          <p>
            I am a passionate software developer focused on building responsive,
            scalable and user-friendly web applications.
          </p>

          <p>
            My development stack includes MongoDB, Express.js, React.js, GraphQL and
            Node.js. I also have experience with Java, Selenium, SQL, Redis, Git.
          </p>

          <p>
            I enjoy converting ideas into real-world applications and
            continuously improving my development skills.
          </p>
        </motion.div>

        <div className="about-cards">
          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="about-icon">{card.icon}</div>

              <h4>{card.title}</h4>

              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
