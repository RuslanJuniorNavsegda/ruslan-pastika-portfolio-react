import { motion } from "framer-motion";
import styles from "./Button.module.scss";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  icon: IconComponent,
  iconRight: IconRightComponent,
  ...props
}) => (
  <motion.button
    className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    {...props}
  >
    {IconComponent && <IconComponent className={styles.icon} />}
    <span className={styles.content}>{children}</span>
    {IconRightComponent && <IconRightComponent className={styles.iconRight} />}
  </motion.button>
);

export default Button;
