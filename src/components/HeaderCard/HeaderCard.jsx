import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const HeaderCard = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickBack = () => {
    navigate("/main", { state: { backNavigate: location.pathname } });
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <button onClick={handleClickBack} className={styles.back}>
        Назад
      </button>
      <img
        className={styles.icons}
        src="../../.././public/back.svg"
        onClick={handleClickBack}
      />
      <div className={styles.profile}>
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${data?.avatar})` }}
        ></div>
        <div className={styles.text}>
          <p className={styles.name}>
            {data?.first_name} {data?.last_name}
          </p>
          <p className={styles.partner}>Партнер</p>
        </div>
      </div>
      <button className={styles.exit} onClick={onLogout}>
        Выход
      </button>
      <img
        className={styles.icons}
        src="../../.././public/exit.svg"
        onClick={onLogout}
      />
    </header>
  );
};

export default HeaderCard;
