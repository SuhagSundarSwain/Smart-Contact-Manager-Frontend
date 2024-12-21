import styles from "./PricingPlanSection.module.css";
import PricingCard from "./PricingCard";
import pricingPlanList from "./PricingPlansLists";

const PricingPlanSection = () => {
  return (
    <div className={styles.pricing_plan_section}>
      <h2>Flexible Pricing Plans</h2>
      <div className={styles.price_cards}>
        {pricingPlanList.map(({ title, priceRate, benefits }) => (
          <PricingCard
            title={title}
            priceRate={priceRate}
            benefits={benefits}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlanSection;
