import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../components/body/HomePage";
import { AboutPage } from "../components/body/AboutPage";
import { ServicePage } from "../components/body/ServicePage";
import { ContactPage } from "../components/body/ContactPage";
import { LoginPage } from "../components/body/LoginSignupPage/Login/LoginPage";
import { SignUpPage } from "../components/body/LoginSignupPage/SignUp/SignUpPage";
import { AuthPage } from "../components/body/LoginSignupPage/AuthPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "service", element: <ServicePage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "auth",
        element: <AuthPage />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "sign-up", element: <SignUpPage /> },
        ],
      },
    ],
  },
]);
