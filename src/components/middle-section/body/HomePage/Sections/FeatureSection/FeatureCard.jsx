import styles from "./FeatureCard.module.css";

const FeatureCard = ({ children,title,subTitle }) => {
  return (
    <div className={`card w-70 ${styles.card}`}>
      <div className={`card-body ${styles.card_body}`}>
        {children}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
