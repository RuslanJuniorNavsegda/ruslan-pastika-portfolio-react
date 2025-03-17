import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../../assets/data/services";
import Button from "../../components/Button/Button";
import styles from "./Services.module.scss";

export default function Services() {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Профессиональные услуги
        </motion.h2>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.serviceHeader}>
                <div className={styles.iconWrapper}>{service.icon}</div>
                <h3>{service.title}</h3>
              </div>

              <div className={styles.subsections}>
                {service.subsections.map((subsection, index) => (
                  <div
                    key={index}
                    className={styles.subsection}
                    onMouseEnter={() => setActivePopup(subsection)}
                    onMouseLeave={() => setActivePopup(null)}
                  >
                    <h4>{subsection.title}</h4>

                    <AnimatePresence>
                      {activePopup === subsection && (
                        <motion.div
                          className={styles.popup}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          <div className={styles.popupContent}>
                            <h5>Основные возможности</h5>
                            <ul>
                              {subsection.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                              ))}
                            </ul>

                            <div className={styles.meta}>
                              <span>
                                Срок реализации: {subsection.duration}
                              </span>
                              <div className={styles.techTags}>
                                {subsection.features.map((tech, i) => (
                                  <span key={i}>#{tech}</span>
                                ))}
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="small"
                              className={styles.ctaButton}
                            >
                              Обсудить проект
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
