import FeatureSection from "./Sections/FeatureSection/FeatureSection";
import HeadingSection from "./Sections/HeadingSection/HeadingSection";
import PricingPlanSection from "./Sections/PricingPlanSection/PricingPlanSection";

export default function HomePage() {
  return (
    <>
      <HeadingSection />
      <FeatureSection />
      <PricingPlanSection />
    </>
  );
}
