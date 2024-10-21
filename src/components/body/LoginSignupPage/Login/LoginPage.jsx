import { useSelector } from "react-redux";
import { LoginFormContaint } from "./LoginFormContaint";
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  const theme = useSelector((store) => store.theme);

  return (
    <div className={styles.login_form_section}>
      <div
        className={`${styles.login_form} ${
          theme.lightTheme ? styles.login_form_light : styles.login_form_dark
        }`}
      >
        <LoginFormContaint theme={theme} />
      </div>
    </div>
  );
};
