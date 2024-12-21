import styles from "./FeatureSection.module.css";
import FeatureCard from "./FeatureCard";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FeatureCardList from "./FeatureCardList";

const FeatureSection = () => {
  return (
    <div className={styles.feature_Section}>
      <h2>Powerful Features</h2>
      <div className={styles.feature_Card_Section}>
        {FeatureCardList.map((featureCard,index) => (
          <FeatureCard
          key={index}
            title={featureCard.title}
            subTitle={featureCard.subtitle}
          >
            {featureCard.logo}
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
