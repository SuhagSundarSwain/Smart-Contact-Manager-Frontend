import { useDispatch, useSelector } from "react-redux";
import styles from "./AddContact.module.css";
import AddContactForm from "./AddContactForm";
import PersonIcon from "@mui/icons-material/Person";
import { sidebarActions } from "../../../../../store/redux-store/sidebarSlice";
import { useEffect } from "react";

const AddContact = () => {
  const theme = useSelector((store) => store.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sidebarActions.setTab({ tab: "Add Contact" }));
  }, []);
  return (
    <div className={styles.addContact}>
      <div
        className={`${styles.addContactForm} ${
          theme.lightTheme
            ? styles.addContactForm_light
            : styles.addContactForm_dark
        }`}
      >
        <div className={styles.form_title}>
          <h2 style={{ marginBottom: "0px" }}>Add Contact</h2>
          <PersonIcon style={{ height: "auto", width: "40px" }} />
        </div>

        <p style={{ color: "grey" }}>
          The contact will save and you can access from anywhere and can send
          email.
        </p>
        <AddContactForm />
      </div>
    </div>
  );
};
export default AddContact;
