import styles from "./DashboardUpper.module.css";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";

const DashboardUpper = () => {
  const cardList = [
    {
      cardTitle: "Total Contacts",
      icon: <PersonIcon />,
      card_middle: 1234,
      card_footer: "+20% from last month",
    },
    {
      cardTitle: "Recent Addition",
      icon: <AddIcon />,
      card_middle: 56,
      card_footer: "+10% from last week",
    },
    {
      cardTitle: "Storage Used",
      icon: <ArrowDropDownIcon />,
      card_middle: "2.5 GB",
      card_footer: "of 5GB Total",
    },
  ];

  const theme = useSelector((store) => store.theme);

  return (
    <div className={styles.dashboard_cards}>
      {cardList.map((card) => (
        <div
          key={card.cardTitle}
          className={`card ${styles.card} ${
            theme.lightTheme ? "" : styles.card_dark
          }`}
        >
          <div className={`card-body`}>
            <div className={styles.card_upper}>
              <h6 className="card-text">{card.cardTitle}</h6>
              {card.icon}
            </div>
            <h4 className={`card-title ${styles.card_middle}`}>
              {card.card_middle.toLocaleString()}
            </h4>
            <p className={`card-subtitle mb-0 ${styles.card_footer}`}>
              {card.card_footer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardUpper;
