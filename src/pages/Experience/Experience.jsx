import { motion } from "framer-motion";
import { experienceData } from "../../assets/data/experience";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.content}>
                <div className={styles.header}>
                  <div className={styles.companyLogo}>
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className={styles.companyInfo}>
                    <h3>{exp.company}</h3>
                    <p className={styles.dates}>{exp.dates}</p>
                    <p className={styles.position}>{exp.position}</p>
                  </div>
                </div>

                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>

                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
