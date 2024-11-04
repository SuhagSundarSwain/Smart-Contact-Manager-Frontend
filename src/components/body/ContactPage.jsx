import { useEffect } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export const ContactPage = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to login if user is not logged in
    if (!loaderData.status) {
      navigate("/auth/login", { state: { from: location } });
    }
  }, [loaderData.status, navigate, location]);

  return <div>ContactPage</div>;
};
