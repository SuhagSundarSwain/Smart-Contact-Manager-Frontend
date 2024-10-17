import { Outlet } from "react-router-dom";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  return (
    <div className={styles.container}>
      <Outlet/>
    </div>
  );
};
