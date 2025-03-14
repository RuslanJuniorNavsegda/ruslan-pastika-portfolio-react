import { useState } from "react";
import { motion } from "framer-motion";
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
      <div className={styles.content}>
        <motion.div
          className={styles.formContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Get in Touch</h2>

          {submitted ? (
            <div className={styles.success}>
              <h3>Thanks for your message!</h3>
              <p>I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
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
                <label htmlFor="message">Message</label>
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

              <Button variant="primary" size="large" type="submit">
                Send Message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
