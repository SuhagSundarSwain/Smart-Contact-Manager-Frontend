import { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

const User = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!loaderData.status) {
      navigate("/auth/login", { state: { from: location } });
    }
  }, [loaderData, navigate,location]);
  return <Outlet />;
};
export default User;
