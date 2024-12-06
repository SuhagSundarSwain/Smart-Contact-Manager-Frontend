import { useDispatch } from "react-redux";
import styles from "./Dashboard.module.css";
import DashboardLower from "./DashboardLower";

import DashboardUpper from "./DashboardUpper";
import { sidebarActions } from "../../../../../store/redux-store/sidebarSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(sidebarActions.setTab({ tab: "Dashboard" }));
  return (
    <div className={styles.dashboard}>
      <h2>Welcome to Dashboard</h2>
      <DashboardUpper />
      <DashboardLower />
    </div>
  );
};
export default Dashboard;
