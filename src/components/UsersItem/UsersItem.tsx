import { Link } from "react-router-dom";
import { IUser } from "../../interfaces";
import styles from "./styles.module.css";

interface Props {
  item: IUser;
}

const UsersItem = ({ item }: Props) => {
  return (
    <Link to={`/card/${item.id}`} className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.avatar})` }}
      ></div>
      <p>
        {item.first_name} {item.last_name}
      </p>
      <div className={styles.like}>
        <img src="../../.././public/Vector.svg" />
      </div>
    </Link>
  );
};

export default UsersItem;
