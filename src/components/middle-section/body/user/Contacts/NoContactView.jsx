import { useNavigate } from "react-router-dom";
import styles from "./NoContactView.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const NoContactView = () => {
  const { lightTheme } = useSelector((store) => store.theme);
  const navigate = useNavigate();
  return (
    <div className={styles.NCV}>
      <h3>{`<--- No Contacts Available --->`}</h3>
      <button
        type="button"
        className={`btn ${lightTheme?"btn-dark":"btn-primary"} ${styles.add_button}`}
        onClick={() => navigate("/user/add contact")}
      >
        <AddIcon />
        <span>Add Contact</span>
      </button>
    </div>
  );
};

export default NoContactView;
