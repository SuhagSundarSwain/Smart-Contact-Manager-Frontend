import styles from "./DashboardDemoSection.module.css";
import { DoneOutlined } from "@mui/icons-material";

const DashboardDemoSection = () => {
  const demoFeatureList = [
    "Quick overview of recent contacts",
    "Easy access to frequently used features",
    "Customizable widgets for personalized experience",
  ];

  const videoLink =
    "https://cdn.dribbble.com/userupload/16372142/file/original-c1b62f740beb514d22ff10f93d1f4651.mp4";

  return (
    <div className={styles.Dashboard_Demo_Section}>
      {/* Video Section */}
      <video
        className={styles.dashboard_demo_video}
        src={videoLink}
        autoPlay
        loop
        muted
        
      />

      {/* Text and Features Section */}
      <div className={styles.dashboard_demo_right}>
        <h2>Intuitive Dashboard</h2>
        <h5 style={{ color: "rgb(81, 81, 81)" }}>
          Experience the power of Smart Contacts with our user-friendly
          dashboard. Manage your contacts effortlessly and stay organized like
          never before.
        </h5>
        {demoFeatureList.map((demoFeature, index) => (
          <p key={index}>
            <DoneOutlined color="success" /> {demoFeature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DashboardDemoSection;
