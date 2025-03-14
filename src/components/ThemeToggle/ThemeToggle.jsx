import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <motion.div
      className={styles.toggle}
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.switch} data-dark={darkMode}>
        {darkMode ? (
          <FiMoon className={styles.icon} />
        ) : (
          <FiSun className={styles.icon} />
        )}
      </div>
    </motion.div>
  );
}
