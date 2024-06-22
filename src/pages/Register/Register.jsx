import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/apiRegister";
import styles from "./styles.module.css";

function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await register(data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    navigate("/main");
  };

  const onInputChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2>Регистрация</h2>
          <label className={styles.label}>
            Имя
            <input type="text" name="name" placeholder="Eve" required />
          </label>
          <label className={styles.label}>
            Электронная почта
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="eve.holt@reqres.in"
              required
              onChange={(e) => onInputChange("email", e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="pistol"
              required
              onChange={(e) => onInputChange("password", e.target.value)}
            />
          </label>
          <label className={styles.label}>
            Подтвердите пароль
            <input
              type="password"
              name="confirmPassword"
              placeholder="pistol"
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
