import { useSelector } from "react-redux";
import style from "./HeaderContentSection.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const HeaderContentSection = () => {
  const tab_list = ["Home", "Features", "Pricing", "FAQs"];
  const theme = useSelector((store) => store.theme);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section when navigating with state
  useEffect(() => {
    const sectionId = location.state?.sectionId; // Get sectionId from state
    if (sectionId) {
      document.getElementById(sectionId.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]); // Trigger scroll when location changes

  const handleSection = (sectionId) => {
    const scrollToSection = () => {
      document.getElementById(sectionId.toLowerCase())?.scrollIntoView({
        behavior: "smooth",
      });
    };

    // Navigate to '/home' if not already there
    location.pathname !== "/home"
      ? navigate("/home", { state: { sectionId } })
      : scrollToSection(); // Scroll immediately if already on home
  };

  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {tab_list.map((tabName) => (
        <li key={tabName} className={style.header_content_list}>
          <span
            className={`px-3 ${style.header_content_list_text_color} ${
              theme.lightTheme ? "text_light_theme" : "text_dark_theme"
            }`}
            onClick={() => handleSection(tabName)} // Handle clicks
          >
            {tabName}
          </span>
        </li>
      ))}
    </ul>
  );
};
