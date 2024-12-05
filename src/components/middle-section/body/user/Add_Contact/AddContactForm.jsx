import styles from "./AddContactForm.module.css";
import { InputAdornment, TextField } from "@mui/material";

import { useSelector } from "react-redux";
import { useContext } from "react";
import { ContactsContext } from "../../../../../store/context-store/Contacts-Context-store";
import { form_fields } from "./AddContact_form_fields";

const AddContactForm = () => {
  const theme = useSelector((store) => store.theme);
  const { addContact } = useContext(ContactsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({name:"x",phone:"y",email:"z"})
  };

  console.log(
    form_fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {})
  );

  return (
    <form onSubmit={handleSubmit}>
      {form_fields.map((field) => (
        <div key={field.label}>
          <label className={styles.field_label}>
            {"Contact " + field.label + ":"}
          </label>
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
        <button
          type="submit"
          className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
        >
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
