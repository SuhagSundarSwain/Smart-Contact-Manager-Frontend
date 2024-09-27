import { useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/header/Header";

const App = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div className={`${theme.lightTheme ? "light_theme" : "dark_theme"}`}>
      <Header />
    </div>
  );
};

export default App;
