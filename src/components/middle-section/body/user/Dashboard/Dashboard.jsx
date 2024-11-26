import styles from "./Dashboard.module.css";
import DashboardLower from "./DashboardLower";

import DashboardUpper from "./DashboardUpper";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h2>Welcome to Dashboard</h2>
      <DashboardUpper />
      <DashboardLower />
    </div>
  );
};
export default Dashboard;
