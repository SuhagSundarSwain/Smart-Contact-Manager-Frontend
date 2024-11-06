import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import styles from "./AuthPage.module.css";
import { useEffect } from "react";

const AuthPage = () => {
  const loaderData = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if the user is already logged in
    if (loaderData.status) {
      navigate("/home");
    }
  }, [loaderData.status, navigate]);

  return (
    <div className={styles.container}>
      {!loaderData.status ? <Outlet /> : null}
    </div>
  );
};

export default AuthPage;
