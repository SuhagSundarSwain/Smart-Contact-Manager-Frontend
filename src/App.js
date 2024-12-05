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
  const { theme, loginStatus } = useLoaderData(); // Get data from loader
  useEffect(() => {
    // Dispatch the theme data fetched by the loader
    dispatch(themeActions.setTheme(theme));
    dispatch(authActions.setAuthStatus(loginStatus.status));
  }, [dispatch, theme, loginStatus]);
  const { lightTheme } = useSelector((store) => store.theme);
  return (
    <div className={`${lightTheme ? "light_theme" : "dark_theme"}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
