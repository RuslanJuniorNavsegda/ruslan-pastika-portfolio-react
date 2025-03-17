import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../assets/data/projects";
import Button from "../../components/Button/Button";
import styles from "./Projects.module.scss";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "react", "typescript", "node", "javascript"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tech.includes(filter));

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Портфолио проектов
        </motion.h2>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {categories.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "primary" : "secondary"}
              size="small"
              onClick={() => setFilter(tech)}
            >
              {tech}
            </Button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className={styles.overlay}>
                  <Button
                    variant="ghost"
                    to={project.demo}
                    className={styles.demoButton}
                  >
                    Демо
                  </Button>
                </div>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <Button
                    variant="secondary"
                    size="small"
                    to={project.code}
                    className={styles.codeButton}
                  >
                    Исходный код
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
