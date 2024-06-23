import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

function PageLayout({ children }: Props) {
  return <div className={styles.layout}>{children}</div>;
}

export default PageLayout;
