import styles from "./Contacts.module.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Contacts = () => {
  const [contactList, setContactList] = useState([]);
  const theme = useSelector((store) => store.theme);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_SCM_BACKEND_SERVER + "/user/contacts/all-contacts",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong on fetch contacts.");
        }

        return response.json();
      })
      .then((data) => setContactList(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className={styles.contact_header}>
      <h2>All your contacts</h2>
      <p>List of all Contacts...</p>
      <table className={`${styles.contacts_table} ${theme.lightTheme?styles.contacts_table_light:styles.contacts_table_dark}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th className={styles.center_align_text}>Phone</th>
            <th className={styles.center_align_text}>Links</th>
            <th className={styles.center_align_text}>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact, index) => (
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
                <DeleteIcon />
                {contact.actions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
