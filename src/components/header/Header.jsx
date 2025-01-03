import { useSelector } from "react-redux";
import { HeaderContentSection } from "./header_subsections/HeaderContentSection";
import { HeaderRightSection } from "./header_subsections/HeaderRightSection";
import { LogoSection } from "./header_subsections/LogoSection";

export const Header = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <header
      className={`fixed-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-0 ${
        theme.lightTheme ? "border-bottom" : ""
      }`}
    >
      <LogoSection />
      <HeaderContentSection />
      <HeaderRightSection />
    </header>
  );
};
