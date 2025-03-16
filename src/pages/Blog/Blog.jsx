import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../assets/data/blogPosts";
import Button from "../../components/Button/Button";
import styles from "./Blog.module.scss";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Инновации", "Опыт", "Новости", "Успехи"];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className={styles.blog}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.title}
        >
          Последние публикации
        </motion.h2>

        <div className={styles.filters}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "secondary"}
              size="small"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.imageContainer}>
                <img src={post.image} alt={post.title} />
                <span className={styles.category}>{post.category}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <time>{new Date(post.date).toLocaleDateString()}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.postTitle}>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
