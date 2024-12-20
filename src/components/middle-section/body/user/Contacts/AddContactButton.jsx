import styles from "./AddContactButton.module.css";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddContactButton = () => {
  const { lightTheme } = useSelector((store) => store.theme);
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`btn ${lightTheme ? "btn-dark" : "btn-primary"} ${
        styles.add_button
      }`}
      onClick={() => navigate("/user/add contact")}
    >
      <AddIcon />
      <span>Add Contact</span>
    </button>
  );
};

export default AddContactButton;
