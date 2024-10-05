import { useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div className={`${theme.lightTheme ? "light_theme" : "dark_theme"}`}>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default App;
