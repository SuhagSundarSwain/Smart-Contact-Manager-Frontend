import { useDispatch, useSelector } from "react-redux";
import styles from "./HeaderRightSection.module.css";
import ContrastIcon from "@mui/icons-material/Contrast";
import { themeActions } from "../../../store/redux-store/themeSlice";
import { useNavigate } from "react-router-dom";

export const HeaderRightSection = () => {
  const auth = useSelector((store) => store.auth);
  const button_list = auth.authStatus ? ["Logout"] : ["Login", "Sign-up"];
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
          onClick={() => {
            if (buttonName.toLowerCase() === "logout")
              navigate(`${buttonName.toLowerCase()}`);
            else navigate(`/auth/${buttonName.toLowerCase()}`);
          }}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
