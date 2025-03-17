import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { skills } from "../../assets/data/skills";
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
          <p className={styles.tagline}>Превращаю идеи в цифровую реальность</p>

          <div className={styles.actions}>
            <Button
              variant="primary"
              size="large"
              onClick={() => window.open("/portfolio.pdf")}
            >
              Посмотреть работы
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
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
            alt="Руслан Пастика"
          />
        </motion.div>
      </div>

      <div className={styles.sectionPreview}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.previewContainer}
        >
          <h2>Мои услуги</h2>
          <p className={styles.previewText}>
            Профессиональная разработка веб-приложений, мобильных решений и
            современных сайтов с фокусом на производительность и UX
          </p>
          <Button variant="secondary" to="/services" IconRight={FiArrowRight}>
            Все услуги
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.previewContainer}
        >
          <h2>Последние проекты</h2>
          <p className={styles.previewText}>
            Реализованные кейсы и успешные решения для клиентов из различных
            отраслей
          </p>
          <Button variant="secondary" to="/projects" IconRight={FiArrowRight}>
            Смотреть проекты
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.previewContainer}
        >
          <h2>Профессиональный опыт</h2>
          <p className={styles.previewText}>
            Более 5 лет коммерческой разработки и сотрудничества с
            международными компаниями
          </p>
          <Button variant="secondary" to="/experience" IconRight={FiArrowRight}>
            Подробнее об опыте
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.previewContainer}
        >
          <h2>Блог разработчика</h2>
          <p className={styles.previewText}>
            Последние статьи о веб-разработке, советы по оптимизации и
            профессиональные лайфхаки
          </p>
          <Button variant="secondary" to="/blog" IconRight={FiArrowRight}>
            Читать блог
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
