import styles from "./styles.module.css";

function PageLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}

export default PageLayout;
