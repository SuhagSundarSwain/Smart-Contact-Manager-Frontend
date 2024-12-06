import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export const form_fields = [
  {
    label: "name",
    text_field_icon: <PersonOutlineOutlinedIcon />,
    placeholder: "Enter contact name",
    inputType: "text",
    required: true,
  },
  {
    label: "email",
    text_field_icon: <EmailOutlinedIcon />,
    placeholder: "Enter contact email",
    inputType: "email",
    required: true,
  },
  {
    label: "phone",
    text_field_icon: <CallOutlinedIcon />,
    placeholder: "Enter contact phone/mobile number",
    inputType: "number",
    required: true,
  },
  {
    label: "address",
    type: "textarea",
    placeholder: "Enter contact address",
    inputType: "text",
  },
  {
    label: "description",
    type: "textarea",
    placeholder: "Enter contact details/description.",
    inputType: "text",
  },
];
