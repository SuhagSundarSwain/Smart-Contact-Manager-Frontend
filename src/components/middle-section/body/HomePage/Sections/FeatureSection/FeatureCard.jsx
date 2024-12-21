import styles from "./FeatureCard.module.css";

const FeatureCard = ({ logo, title, subTitle }) => {
  return (
    <div className={`card ${styles.card}`}>
      <div className={`card-body ${styles.card_body}`}>
        {logo}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
