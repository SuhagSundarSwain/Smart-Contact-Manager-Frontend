import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Outlet, useLoaderData } from "react-router-dom"; // Import useLoaderData
import { themeActions } from "./store/themeSlice";
import { useEffect } from "react";
import { authActions } from "./store/authSlice";

const App = () => {
  const dispatch = useDispatch();
  const loaderData = useLoaderData(); // Get data from loader
  useEffect(() => {
    // Dispatch the theme data fetched by the loader
    dispatch(themeActions.setTheme(loaderData.theme));
    dispatch(authActions.setAuthStatus(loaderData.loginStatus.status));
  }, [dispatch, loaderData]);
  const theme = useSelector((store) => store.theme);
  return (
    <div className={`${theme.lightTheme ? "light_theme" : "dark_theme"}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
