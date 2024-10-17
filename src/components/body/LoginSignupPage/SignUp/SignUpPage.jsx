import { useSelector } from "react-redux";
import { SignUpFormContaint } from "./SignUpFormContaint";
import styles from "./SignUpPage.module.css";

export const SignUpPage = () => {
  const theme = useSelector((store)=>store.theme)
  
  return (
    <div className={styles.signup_form_section}>
      <div className={`${styles.signup_form} ${theme.lightTheme?styles.signup_form_light:styles.signup_form_dark}`}>
        <SignUpFormContaint theme={theme}/>
      </div>
    </div>
  );
};
