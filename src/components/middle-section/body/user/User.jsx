import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ContactsContextProvider from "../../../../store/context-store/Contacts-Context-store";

const User = () => {
  const { status } = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!status) {
      navigate("/auth/login", { state: { from: location } });
    }
  }, [status, navigate, location]);

  return (
    <ContactsContextProvider>
      <Outlet />
    </ContactsContextProvider>
  );
};
export default User;
