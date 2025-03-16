import { motion } from "framer-motion";
import { skills } from "../../assets/data/skills";
import { FiDownload } from "react-icons/fi";
import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.textContent}
        >
          <h1>Frontend Developer</h1>
          <p className={styles.tagline}>
            Turning ideas into interactive experiences
          </p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="large"
              onClick={() => window.open("/cv.pdf")}
            >
              View Portfolio
            </Button>

            <Button
              variant="secondary"
              size="large"
              icon={FiDownload}
              onClick={() => window.open("/cv.pdf")}
            >
              Download CV
            </Button>
          </div>

          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className={styles.skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                #{skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className={styles.avatar}
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400"
            alt="Руслан Пастика"
          />
        </motion.div>
      </div>
    </section>
  );
}
