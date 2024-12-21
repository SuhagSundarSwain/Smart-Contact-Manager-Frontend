import styles from "./HeadingSection.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeadingSection = () => {
  return (
    <div className={styles.heading_section}>
      <h1 className={styles.heading_tag}>
        Revolutionize Your{" "}
        <span style={{ color: "blue" }}>Contact Management</span>
      </h1>
      <p className={styles.sub_heading_tag}>
        Streamline your connections, boost productivity, and never lose touch
        with Smart Contacts - the ultimate solution for modern professionals.
      </p>
      <div className={styles.button_Container}>
        <button type="button" className="btn btn-dark">
          Get Started <ArrowForwardIcon />
        </button>
        <button type="button" className="btn btn-light">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default HeadingSection;
