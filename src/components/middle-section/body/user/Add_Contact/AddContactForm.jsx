import styles from "./AddContactForm.module.css";
import { InputAdornment, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { ContactsContext } from "../../../../../store/context-store/Contacts-Context-store";
import { form_fields } from "./AddContact_form_fields";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ToastContainer, toast } from "react-toastify";

const AddContactForm = () => {
  const theme = useSelector((store) => store.theme);
  const { addContact, addContactLoading, addContactError } =
    useContext(ContactsContext);
  const [saveContact, setSaveContact] = useState(false);
  const [formData, setFormData] = useState(
    form_fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {})
  );

  const handleInputChange = (event, label) => {
    setFormData({
      ...formData,
      [label]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await addContact(formData);

    if (success) {
      toast.success("Contact added successfully!", {
        position: "top-center",
        autoClose: 2500,
        icon: "✅",
      });
      setFormData(
        form_fields.reduce((acc, field) => {
          acc[field.label] = "";
          return acc;
        }, {})
      );
    } else {
      toast.error("Failure in adding contact!", {
        position: "top-right",
        autoClose: 2450,
        icon: "⛔",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {form_fields.map((field) => (
          <div key={field.label}>
            <label className={styles.field_label}>
              {field.label.charAt(0).toUpperCase() +
                field.label.slice(1) +
                (field.required ? "*" : "") +
                ":"}
            </label>
            {field.type === "textarea" ? (
              <textarea
                className={`${styles.textField} ${
                  theme.lightTheme
                    ? styles.textField_light
                    : styles.textField_dark
                }`}
                placeholder={field.placeholder}
                value={formData[field.label]}
                onChange={(e) => handleInputChange(e, field.label)}
              ></textarea>
            ) : (
              <TextField
                variant="outlined"
                size="small"
                slotProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {field.text_field_icon}
                    </InputAdornment>
                  ),
                }}
                placeholder={field.placeholder}
                value={formData[field.label]}
                onChange={(e) => handleInputChange(e, field.label)}
                className={`${styles.textField} ${
                  theme.lightTheme
                    ? styles.textField_light
                    : styles.textField_dark
                }`}
                style={{ marginBottom: "20px" }}
                type={field.inputType}
                helperText={addContactError[field.label]}
                error={Boolean(addContactError[field.label])}
              />
            )}
          </div>
        ))}
        <div
          className={styles.addContact}
          onClick={(e) => {
            setSaveContact(!saveContact);
            e.target.value = !saveContact;
            handleInputChange(e, "favourite");
          }}
        >
          <label>Add to favourite:</label>
          {saveContact ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </div>
        <div className={styles.button_container}>
          <button
            type="submit"
            className={`btn ${theme.lightTheme ? "btn-dark" : "btn-primary"}`}
            disabled={addContactLoading}
          >
            {addContactLoading ? "Adding Contact..." : "Add Contact"}
          </button>
          <button
            type="reset"
            className="btn btn-danger"
            onClick={() =>
              setFormData(
                form_fields.reduce((acc, field) => {
                  acc[field.label] = "";
                  return acc;
                }, {})
              )
            }
            disabled={addContactLoading}
          >
            Reset
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddContactForm;
