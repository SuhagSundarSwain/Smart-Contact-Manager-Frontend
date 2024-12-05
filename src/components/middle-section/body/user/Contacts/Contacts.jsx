import styles from "./Contacts.module.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../../Spinner/LoadingSpinner";
import { ContactsContext } from "../../../../../store/context-store/Contacts-Context-store";

const Contacts = () => {
  const { lightTheme } = useSelector((store) => store.theme);
  const { contactList, contactLoading, deleteContact } =
    useContext(ContactsContext);

  return (
    <div className={styles.contact_header}>
      <h2>All your contacts</h2>
      <p>List of all Contacts...</p>
      <table
        className={`${styles.contacts_table} ${
          lightTheme ? styles.contacts_table_light : styles.contacts_table_dark
        }`}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th className={styles.center_align_text}>Phone</th>
            <th className={styles.center_align_text}>Links</th>
            <th className={styles.center_align_text}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactLoading ? (
            <tr>
              <td colSpan="4" className={styles.center_align_text}>
                <LoadingSpinner />
              </td>
            </tr>
          ) : (
            contactList.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td className={styles.center_align_text}>
                  <LocalPhoneRoundedIcon />
                  {contact.phone}
                </td>
                <td className={styles.center_align_text}>
                  <EmailOutlinedIcon />
                  {contact.email}
                </td>
                <td className={styles.center_align_text}>
                  <DeleteIcon onClick={() => deleteContact(contact)} />
                  {contact.actions}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
