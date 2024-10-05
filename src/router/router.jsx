import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../components/body/HomePage";
import { AboutPage } from "../components/body/AboutPage";
import { ServicePage } from "../components/body/ServicePage";
import { ContactPage } from "../components/body/ContactPage";
import { LoginPage } from "../components/body/LoginSignupPage/LoginPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/service", element: <ServicePage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);
