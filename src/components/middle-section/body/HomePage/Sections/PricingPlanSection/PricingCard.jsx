import styles from "./PricingCard.module.css";
import { DoneOutlined } from "@mui/icons-material";

const PricingCard = ({ title, priceRate, benefits }) => {
  return (
    <div className={`card ${styles.pricing_card}`}>
      <div className={`card-body ${styles.pricing_card_body}`}>
        <h4 className="card-title">{title}</h4>
        <h2 className="card-subtitle mb-2 text-body-secondary">
          {priceRate}
          <span style={{ fontSize: "medium" }}>month</span>
        </h2>

        {benefits.map((benefit) => (
          <p className="card-text">
            <DoneOutlined fontSize="small" color="success" /> {benefit}
          </p>
        ))}

        <button
          type="button"
          className="btn btn-dark"
          style={{ width: "100%" }}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};
export default PricingCard;
