import { useSelector } from "react-redux";
import style from "./HeaderContentSection.module.css";
import { Link } from "react-router-dom";

export const HeaderContentSection = () => {
  const tab_list = ["Home", "About", "Service", "Contact"];
  const theme = useSelector((store) => store.theme);

  return (
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {tab_list.map((tabName) => (
        <li key={tabName} className={style.header_content_list}>
          <Link
            className={`px-3 ${style.header_content_list_text_color} ${
              theme.lightTheme ? "text_light_theme" : "text_dark_theme"
            }`}
            role="button"
            to={`/${tabName}`}
          >
            {tabName}
          </Link>
        </li>
      ))}
    </ul>
  );
};
