import FAQSection from "./Sections/FAQsection/FAQSection";
import FeatureSection from "./Sections/FeatureSection/FeatureSection";
import HeadingSection from "./Sections/HeadingSection/HeadingSection";
import PricingPlanSection from "./Sections/PricingPlanSection/PricingPlanSection";
import RGSsection from "./Sections/RGSsection/RGSsection";

export default function HomePage() {
  return (
    <>
      <HeadingSection />
      <FeatureSection />
      <PricingPlanSection />
      <FAQSection />
      <RGSsection />
    </>
  );
}
