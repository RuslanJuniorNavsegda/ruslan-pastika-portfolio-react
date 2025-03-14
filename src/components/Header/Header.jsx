import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <span>{"<Dev />"}</span>
        </Link>
        <div className={styles.navLinks}>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </nav>
    </motion.header>
  );
}
