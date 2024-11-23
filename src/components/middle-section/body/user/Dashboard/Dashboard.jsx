import styles from "./Dashboard.module.css";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Dashboard = () => {
  const cardList = [
    {
      cardTitle: "Total Contacts",
      icon:<PersonIcon/>,
      card_middle: 1234,
      card_footer: "+20% from last month",
    },
    {
      cardTitle: "Recent Addition",
      icon:<AddIcon/>,
      card_middle: 56,
      card_footer: "+10% from last week",
    },
    {
      cardTitle: "Storage Used",
      icon:<ArrowDropDownIcon/>,
      card_middle: "2.5 GB",
      card_footer: "of 5GB Total",
    },
  ];
  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <div className={styles.dashboard_cards}>
        {cardList.map((card) => (
          <div className={`card ${styles.card}`}>
            <div className={`card-body`}>
              <div className={styles.card_upper}>
                <h6 className="card-text">{card.cardTitle}</h6>
                {card.icon}
              </div>
              <h4 className={`card-title ${styles.card_middle}`}>
                {card.card_middle.toLocaleString()}
              </h4>
              <p className="card-subtitle mb-0 text-body-secondary">
                {card.card_footer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;
