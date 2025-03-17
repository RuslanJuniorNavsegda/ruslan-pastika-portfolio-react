import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Button from "../../components/Button/Button";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь интеграция с email-сервисом
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Свяжитесь со мной
        </motion.h2>

        <div className={styles.grid}>
          {/* Блок контактной информации */}
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Мои контакты</h3>

            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <div>
                <span>Email</span>
                <a href="mailto:hello@goldensystem.com">
                  hello@goldensystem.com
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <span>Телефон</span>
                <a href="tel:+79991234567">+7 (999) 123-45-67</a>
              </div>
            </div>

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
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </div>

            <div className={styles.workHours}>
              <h4>Часы работы</h4>
              <p>Пн-Пт: 09:00 - 18:00</p>
              <p>Сб-Вс: По договоренности</p>
            </div>
          </motion.div>

          {/* Блок формы */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {submitted ? (
              <div className={styles.success}>
                <h3>Спасибо за ваше сообщение! 🎉</h3>
                <p>Я свяжусь с вами в течение 24 часов</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows="5"
                    required
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className={styles.submitButton}
                >
                  Отправить сообщение
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
