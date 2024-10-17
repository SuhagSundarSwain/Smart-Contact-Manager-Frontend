import { useDispatch, useSelector } from "react-redux";
import styles from "./HeaderRightSection.module.css";
import ContrastIcon from "@mui/icons-material/Contrast";
import { themeActions } from "../../../store/themeSlice";
import { useNavigate } from "react-router-dom";

export const HeaderRightSection = () => {
  const button_list = ["Login", "Sign-up"];
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          onClick={() => navigate(`/auth/${buttonName.toLowerCase()}`)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
