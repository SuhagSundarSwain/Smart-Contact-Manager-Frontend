import { useSelector } from "react-redux";

import styles from "./LogoSection.module.css";
import { Link } from "react-router-dom";

export const LogoSection = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div className="col-md-3 mb-2 mb-md-0">
      <Link
        to="/"
        className={`d-inline-flex link-body-emphasis text-decoration-none ${styles.complete_logo}`}
      >
        <img src="images/contact.jpg" className={styles.logo} alt="Logo" />
        <p
          className={`${styles.logo_name} ${
            theme.lightTheme ? "text_light_theme" : "text_dark_theme"
          } `}
        >
          SCM
        </p>
      </Link>
    </div>
  );
};
