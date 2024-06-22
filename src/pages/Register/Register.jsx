import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registration } from "../../api/apiRegister";
import styles from "./styles.module.css";
import { useState } from "react";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await registration(data);
    const token = response.data.token;
    localStorage.setItem("token", token);
    navigate("/main");
  };

  const [visiblePassword, setVisiblePassword] = useState(true);

  const onVisiblePasswords = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>Регистрация</h2>
          <label className={styles.label}>
            Имя
            <input
              className={errors?.name ? styles.redOutline : ""}
              placeholder="Eve"
              {...register("name", {
                required: "true",
              })}
            />
            <div>{errors?.name && <p>Ошибка</p>}</div>
          </label>
          <label className={styles.label}>
            Электронная почта
            <input
              className={errors?.email ? styles.redOutline : ""}
              type="text"
              placeholder="eve.holt@reqres.in"
              {...register("email", {
                required: "true",
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,4}$/,
              })}
            />
            <div>{errors?.email && <p>Ошибка</p>}</div>
          </label>
          <label className={styles.label}>
            Пароль
            <input
              className={errors?.password ? styles.redOutline : ""}
              type={visiblePassword ? "password" : "text"}
              placeholder="pistol"
              {...register("password", {
                required: "true",
              })}
            />
            <div>{errors?.password && <p>Ошибка</p>}</div>
            <img
              className={styles.icon}
              src="../../.././public/eye.svg"
              onClick={onVisiblePasswords}
            />
          </label>
          <label className={styles.label}>
            Подтвердите пароль
            <input
              className={errors?.confirmPassword ? styles.redOutline : ""}
              type={visiblePassword ? "password" : "text"}
              placeholder="pistol"
              {...register("confirmPassword", {
                required: "true",
                validate: (val) => {
                  if (watch("password") != val) {
                    return "Ошибка";
                  }
                },
              })}
            />
            <div>{errors?.confirmPassword && <p>Ошибка</p>}</div>
            <img
              className={styles.icon}
              src="../../.././public/eye.svg"
              onClick={onVisiblePasswords}
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
