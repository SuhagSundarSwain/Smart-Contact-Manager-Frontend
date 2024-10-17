import styles from "./LoginFormContaint.module.css";
import { TextField } from "@mui/material";

export const LoginFormContaint = ({ theme }) => {
  return (
    <>
      <p className={styles.form_title}>Login Here</p>
      <p className={styles.form_description}>
        Start managing contacts on cloud
      </p>
      <form>
        <TextField
          id="userId-email"
          label="UserId/Email"
          placeholder="Enter your UserID or Email"
          variant="outlined"
          size="small"
          margin="normal"
          className={`${styles.textfield} ${
            theme.lightTheme ? styles.textfield_light : styles.textfield_dark
          }`}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          placeholder="Enter your Password"
          size="small"
          margin="normal"
          className={`${styles.textfield} ${
            theme.lightTheme ? styles.textfield_light : styles.textfield_dark
          }`}
        />
        <br />
        <div className={styles.button_container}>
          <button
            type="submit"
            className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
          >
            Login
          </button>
          <button type="reset" className="btn btn-danger">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
