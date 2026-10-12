import { motion } from "framer-motion";
import { Code2, BriefcaseBusiness, ArrowDown, Download } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-small-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <h1>
            Prashik <span>Gawai</span>
          </h1>

          <h2>
            MERN Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications using
            MongoDB, Express.js, React.js, Node.js and GraphQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View Projects
              <ArrowDown size={18} />
            </a>

            <a href="/resume.pdf" download className="btn secondary-btn">
              Resume
              <Download size={18} />
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/prashik11"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/prashik-gawai"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> = {"{"}
              </p>

              <p className="indent">
                name: <span className="green">"Prashik"</span>,
              </p>

              <p className="indent">
                role: <span className="green">"MERN Developer"</span>,
              </p>

              <p className="indent">skills: [</p>

              <p className="double-indent">
                <span className="green">"MongoDB"</span>,
              </p>

              <p className="double-indent">
                <span className="green">"Express"</span>,
              </p>

              <p className="double-indent">
                <span className="green">"React"</span>,
              </p>

              <p className="double-indent">
                <span className="green">"Node.js"</span>
              </p>

              <p className="double-indent">
                <span className="green">"GraphQL"</span>
              </p>

              <p className="indent">]</p>

              <p>{"}"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
