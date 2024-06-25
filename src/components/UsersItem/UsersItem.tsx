import { useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleLike } from "../../store/slices/likesSlice";
import styles from "./styles.module.css";

interface Props {
  item: IUser;
}

const UsersItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const likes = useAppSelector((state) => state.likes.likes);

  return (
    <div className={styles.item} onClick={() => navigate(`/card/${item.id}`)}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.avatar})` }}
      ></div>
      <p>
        {item.first_name} {item.last_name}
      </p>
      <div
        className={styles.like}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleLike(item.id));
        }}
      >
        <svg
          className={styles.svg}
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
        >
          <path
            className={likes.includes(item.id) ? styles.path : ""}
            d="M4.85 1C2.72375 1 1 2.72173 1 4.84548C1 8.69096 5.55 12.1869 8 13C10.45 12.1869 15 8.69096 15 4.84548C15 2.72173 13.2762 1 11.15 1C9.848 1 8.6965 1.64569 8 2.63398C7.64499 2.1289 7.17336 1.71669 6.62504 1.43226C6.07672 1.14784 5.46785 0.999565 4.85 1Z"
            stroke="#151317"
          />
        </svg>
      </div>
    </div>
  );
};

export default UsersItem;
