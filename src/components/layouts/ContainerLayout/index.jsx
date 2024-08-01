/* eslint-disable react/prop-types */
import styles from "../styles/ContainerLayout.module.css";

const ContainerLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default ContainerLayout;
