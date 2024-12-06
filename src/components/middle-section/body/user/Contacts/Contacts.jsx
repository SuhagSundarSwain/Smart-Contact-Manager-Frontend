import styles from "./Contacts.module.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../Spinner/LoadingSpinner";
import { ContactsContext } from "../../../../../store/context-store/Contacts-Context-store";
import { toast, ToastContainer } from "react-toastify";
import NoContactView from "./NoContactView";
import { sidebarActions } from "../../../../../store/redux-store/sidebarSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  dispatch(sidebarActions.setTab({ tab: "Contacts" }));

  const { lightTheme } = useSelector((store) => store.theme);
  const { contactList, contactLoading, deleteContact } =
    useContext(ContactsContext);

  const handleDelete = async (contact) => {
    const confirmDelete = window.confirm(
      `Are you sure to delete ${contact.name}?`
    );
    if (!confirmDelete) return;

    const res = await deleteContact(contact);
    if (res) {
      toast.success(`${contact.name} successfully deleted 🗑️`, {
        position: "top-center",
        autoClose: 2500,
        icon: "✅",
      });
    } else {
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 2500,
        icon: "⛔",
      });
    }
  };

  return (
    <div className={styles.contact_header}>
      <h2>All your contacts</h2>
      <p>List of all Contacts...</p>
      {contactLoading ? (
        <LoadingSpinner />
      ) : contactList.length === 0 ? (
        <NoContactView />
      ) : (
        <table
          className={`${styles.contacts_table} ${
            lightTheme
              ? styles.contacts_table_light
              : styles.contacts_table_dark
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
                  <DeleteIcon onClick={() => handleDelete(contact)} />
                  {contact.actions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
    </div>
  );
};

export default Contacts;
