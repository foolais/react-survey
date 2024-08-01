import { House } from "lucide-react";
import styles from "../styles/NotFoundPages.module.css";
import { Link } from "react-router-dom";

const NotFoundPages = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link to="/" className={styles.btn}>
        <p>Back to Home</p>
        <House size={20} />
      </Link>
    </div>
  );
};

export default NotFoundPages;
