import { motion } from "framer-motion";
import { services } from "../../assets/data/services";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Мои услуги
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
