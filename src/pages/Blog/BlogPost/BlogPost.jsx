import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../../../assets/data/blogPosts";
import Button from "../../../components/Button/Button";
import styles from "./BlogPost.module.scss";

export default function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(postId));

  if (!post) return <div>Статья не найдена</div>;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.post}
    >
      <div className={styles.header}>
        <img src={post.image} alt={post.title} />
        <div className={styles.headerContent}>
          <h1>{post.title}</h1>
          <div className={styles.meta}>
            <time>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span>{post.category}</span>
          </div>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.body}>
          {post.content.split("\n").map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>

        <Button variant="secondary" onClick={() => window.history.back()}>
          ← Назад к блогу
        </Button>
      </div>
    </motion.article>
  );
}
