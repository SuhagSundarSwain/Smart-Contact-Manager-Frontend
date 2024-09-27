import { useDispatch, useSelector } from "react-redux";
import styles from "./Header_right_section.module.css";
import ContrastIcon from "@mui/icons-material/Contrast";
import { store } from "../../../store/App-store";
import { themeActions } from "../../../store/themeSlice";

export const Header_right_section = () => {
  const button_list = ["Login", "Sign-up"];

  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(themeActions.toggleTheme());
  };
  return (
    <div className={`col-md-4 ${styles.right_section}`}>
      <button
        type="button"
        className={`btn ${
          theme.lightTheme ? "btn-outline-dark" : "btn-outline-light"
        }`}
        onClick={changeTheme}
      >
        <ContrastIcon />
        {theme.lightTheme ? "Dark" : "Light"}
      </button>

      {button_list.map((buttonName) => (
        <button
          key={buttonName}
          type="button"
          className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
