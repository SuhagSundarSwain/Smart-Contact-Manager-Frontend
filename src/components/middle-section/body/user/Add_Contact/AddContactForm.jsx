import styles from "./AddContactForm.module.css";
import { InputAdornment, TextField } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { useSelector } from "react-redux";

const AddContactForm = () => {
  const theme = useSelector((store) => store.theme);
  const form_fields = [
    {
      label: "Contact Name",
      text_field_icon: <PersonOutlineOutlinedIcon />,
      placeholder: "Enter contact name",
      inputType:"text"
    },
    {
      label: "Contact Email",
      text_field_icon: <EmailOutlinedIcon />,
      placeholder: "Enter contact email",
      inputType:"email"
    },
    {
      label: "Contact Phone",
      text_field_icon: <CallOutlinedIcon />,
      placeholder: "Enter contact phone/mobile number",
      inputType:"number"
    },
    {
      label: "Contact Address",
      type: "textarea",
      placeholder: "Enter contact address",
      inputType:"text"
    },
    {
      label: "Contact Description",
      type: "textarea",
      placeholder: "Enter contact details/description.",
      inputType:"text"
    },
  ];
  return (
    <form>
      {form_fields.map((field) => (
        <div key={field.label}>
          <label className={styles.field_label}>{field.label + ":"}</label>
          {field.type === "textarea" ? (
            <textarea
              className={`${styles.textField} ${
                theme.lightTheme
                  ? styles.textField_light
                  : styles.textField_dark
              }`}
              placeholder={field.placeholder}
            ></textarea>
          ) : (
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      {field.text_field_icon}
                    </InputAdornment>
                  ),
                },
              }}
              placeholder={field.placeholder}
              className={`${styles.textField} ${
                theme.lightTheme
                  ? styles.textField_light
                  : styles.textField_dark
              }`}
              style={{ marginBottom: "20px" }}
             type={field.inputType}
            />
          )}
        </div>
      ))}
      <div className={styles.button_container}>
        <button type="submit" className={`btn ${theme.lightTheme?"btn-dark":"btn-primary"}`}>
          Add contact
        </button>
        <button type="reset" className="btn btn-danger">
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddContactForm;
