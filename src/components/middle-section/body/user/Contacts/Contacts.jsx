import styles from "./Contacts.module.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    fetch(
      process.env.REACT_APP_SCM_BACKEND_SERVER + "/user/contacts/all-contacts",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => setContactList(data));
  }, []);

  return (
    <div className={styles.contact_header}>
      <h2>All your contacts</h2>
      <p>List of all Contacts...</p>
      <table className={styles.contacts_table}>
        <tr>
          <th>Name</th>
          <th className={styles.center_align_text}>phone</th>
          <th className={styles.center_align_text}>Links</th>
          <th className={styles.center_align_text}>Action</th>
        </tr>
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
      </table>
    </div>
  );
};
export default Contacts;
