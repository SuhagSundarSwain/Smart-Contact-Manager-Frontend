import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/redux-store/authSlice";

const LogoutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the logout action only once when the component mounts
    dispatch(authActions.setLogout());
  }, [dispatch]);

  return <>You have been logged out successfully.</>;
};

export default LogoutPage;
