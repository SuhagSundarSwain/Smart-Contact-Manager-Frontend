import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import styles from "./MiddleSection.module.css";

const MiddleSection = () => {
  return (
    <div className={styles.middle}>
      <Sidebar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default MiddleSection;
