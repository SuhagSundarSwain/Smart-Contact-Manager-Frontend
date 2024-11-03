import { useDispatch } from "react-redux";
import { authActions } from "../../../store/authSlice";

const LogoutPage = () => {
  const dispatch = useDispatch();
  dispatch(authActions.setLogout());
  return <>you have been logged out successfully.</>;
};

export default LogoutPage;
