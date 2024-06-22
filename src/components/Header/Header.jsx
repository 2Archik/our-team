import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Наша команда</h1>
      <h2 className={styles.text}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </h2>
      <button className={styles.btn} onClick={onLogout}>
        Выход
      </button>
    </header>
  );
};

export default Header;