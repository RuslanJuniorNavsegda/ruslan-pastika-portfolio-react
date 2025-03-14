import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../assets/data/projects";
import styles from "./Projects.module.scss";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <h2>My Projects</h2>

        <div className={styles.filters}>
          {["all", "react", "javascript", "node", "typescript"].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`${styles.filter} ${filter === tech ? styles.active : ""}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.image}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
