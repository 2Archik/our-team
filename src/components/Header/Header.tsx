import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slices/authSlice";
import styles from "./styles.module.css";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.desc}>
        <h1 className={styles.title}>Наша команда</h1>
        <h2 className={styles.text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </h2>
      </div>
      <button className={styles.btn} onClick={onLogout}>
        Выход
      </button>
      <img
        className={styles.exit}
        src="../../.././exit.svg"
        onClick={onLogout}
      />
    </header>
  );
};

export default Header;
