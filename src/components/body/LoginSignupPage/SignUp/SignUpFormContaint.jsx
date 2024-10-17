import { TextField } from "@mui/material";
import styles from "./SignUpFormContaint.module.css";

export const SignUpFormContaint = ({theme}) => {
  const listField = [
    "Name",
    "Email",
    "New password",
    "Phone",
    "Someting About yourself",
  ];
  return (
    <>
      <p className={styles.form_title}>Register Here</p>
      <p className={styles.form_description}>
        Start managing contacts on cloud
      </p>
      <form>
        {listField.map((fieldName) => (
          <TextField
          key={fieldName}
            id={fieldName}
            label={fieldName}
            placeholder={`Enter ${fieldName}`}
            variant="outlined"
            size="small"
            margin="normal"
            className={`${styles.textfield} ${theme.lightTheme?styles.textfield_light:styles.textfield_dark}`}
          />
        ))}
        <br />
        <div className={styles.button_container}>
          <button type="button" className={`btn   ${theme.lightTheme? "btn-dark":"btn-primary"}`}>
            SignUp
          </button>
          <button type="reset" className="btn btn-danger">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
