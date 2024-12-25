import styles from "./FeatureSection.module.css";
import FeatureCard from "./FeatureCard";
import FeatureCardList from "./FeatureCardList";
import DashboardDemoSection from "./DashboardDemoSection/DashboardDemoSection";

const FeatureSection = () => {
  return (
    <>
      <div id="features" className={styles.feature_Section}>
        <h2>Powerful Features</h2>
        <div className={styles.feature_Card_Section}>
          {FeatureCardList.map(({ logo, title, subtitle }, index) => (
            <FeatureCard
              key={index}
              title={title}
              subTitle={subtitle}
              logo={logo}
            />
          ))}
        </div>
      </div>
      <DashboardDemoSection />
    </>
  );
};

export default FeatureSection;
