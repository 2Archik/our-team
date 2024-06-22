import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const HeaderCard = ({ cardData }) => {
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
      <div className={styles.profile}>
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${cardData.avatar})` }}
        ></div>
        <div className={styles.text}>
          <p className={styles.name}>
            {cardData.first_name} {cardData.last_name}
          </p>
          <p className={styles.partner}>Партнер</p>
        </div>
      </div>
      <button className={styles.exit} onClick={onLogout}>
        Выход
      </button>
    </header>
  );
};

export default HeaderCard;
