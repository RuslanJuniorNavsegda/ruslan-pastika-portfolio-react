import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.content}>
        <div className={styles.socials}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen />
          </a>
        </div>
        <div className={styles.info}>
          <p>© {new Date().getFullYear()} Frontend Developer Portfolio</p>
          <p>Built with React and ❤️</p>
        </div>
      </div>
    </motion.footer>
  );
}
