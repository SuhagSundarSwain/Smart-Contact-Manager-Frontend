import { useSelector } from "react-redux";
import styles from "./DashboardLower.module.css";

const DashboardLower = () => {
  const recent_contact_list = [
    { name: "Suhag", email: "suhag@gmail.com", phone: "482156" },
    { name: "happy", email: "happy@gmail.com", phone: "459752" },
    { name: "Papun", email: "papun@gmail.com", phone: "848965" },
    { name: "Chiranjib", email: "chiranjib@gmail.com", phone: "845245" },
  ];
  const theme = useSelector((store) => store.theme);

  return (
    <div
      className={`${styles.recent_contact_section} ${
        theme.lightTheme
          ? styles.recent_contact_section_light
          : styles.recent_contact_section_dark
      }`}
    >
      <h3 style={{ marginBottom: "0" }}>Recent Contacts</h3>
      <p style={{color:"grey"}}>You have {recent_contact_list.length} total contacts</p>
      <table className={`table ${theme.lightTheme ? "" : "table-dark"}`}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {recent_contact_list.map((contact) => (
            <tr key={contact.email}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardLower;
