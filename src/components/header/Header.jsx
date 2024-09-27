import { useSelector } from "react-redux";
import { Header_content_section } from "./header_subsections/Header_content_section";
import { Header_right_section } from "./header_subsections/Header_right_section";
import { Logo_section } from "./header_subsections/Logo_section";

export const Header = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <header
      className={`d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ${
        theme.lightTheme ? "border-bottom" : ""
      }`}
    >
      <Logo_section />

      <Header_content_section />

      <Header_right_section />
    </header>
  );
};
