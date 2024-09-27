import { useSelector } from "react-redux";

import styles from "./Logo_section.module.css";

export const Logo_section = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div className="col-md-3 mb-2 mb-md-0">
      <a
        href="/"
        className={`d-inline-flex link-body-emphasis text-decoration-none ${styles.complete_logo}`}
      >
        <img src="images/contact.jpg" className={styles.logo}></img>
        <p
          className={`${styles.logo_name} ${
            theme.lightTheme ? "text_light_theme" : "text_dark_theme"
          } `}
        >
          SCM
        </p>
      </a>
    </div>
  );
};
