import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export const form_fields = [
  {
    label: "Name",
    text_field_icon: <PersonOutlineOutlinedIcon />,
    placeholder: "Enter contact name",
    inputType: "text",
  },
  {
    label: "Email",
    text_field_icon: <EmailOutlinedIcon />,
    placeholder: "Enter contact email",
    inputType: "email",
  },
  {
    label: "Phone",
    text_field_icon: <CallOutlinedIcon />,
    placeholder: "Enter contact phone/mobile number",
    inputType: "number",
  },
  {
    label: "Address",
    type: "textarea",
    placeholder: "Enter contact address",
    inputType: "text",
  },
  {
    label: "Description",
    type: "textarea",
    placeholder: "Enter contact details/description.",
    inputType: "text",
  },
];
