import { Button, TextField } from "@mui/material";
import styles from "./RGSsection.module.css";
const RGSsection = () => {
  return (
    <div id="rgs" className={styles.rgs_section}>
      <h2>Ready to Get Started?</h2>
      <p className={styles.rgs_subtitle}>
        Join thousands of satisfied users and take control of your contacts
        today.
      </p>
      <p className={styles.rgs_subtitle}>
        Sign up now and experience the power of Smart Contacts!
      </p>
      <form>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          placeholder="Enter your Email."
        />
        <button
          type="submit"
          className="btn btn-dark"
          style={{ margin: "0px 10px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default RGSsection;
