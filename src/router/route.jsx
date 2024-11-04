import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { HomePage } from "../components/body/HomePage";
import { AboutPage } from "../components/body/AboutPage";
import { ServicePage } from "../components/body/ServicePage";
import { ContactPage } from "../components/body/ContactPage";
import { LoginPage } from "../components/body/LoginSignupPage/Login/LoginPage";
import { SignUpPage } from "../components/body/LoginSignupPage/SignUp/SignUpPage";
import { AuthPage } from "../components/body/LoginSignupPage/AuthPage";
import { combineLoader, loginStatusLoader } from "./loader";
import LogoutPage from "../components/body/LoginSignupPage/LogoutPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: combineLoader,
    children: [
      { index: true, element: <Navigate to="/home" replace /> }, // Redirect "/" to "/home"
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "service", element: <ServicePage /> },
      {
        path: "contact",
        element: <ContactPage />,
        loader: loginStatusLoader, // Check login status for ContactPage
      },
      {
        path: "auth",
        element: <AuthPage />,
        loader: loginStatusLoader, // Check login status for AuthPage and its children
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "sign-up", element: <SignUpPage /> },
        ],
      },
      { path: "logout", element: <LogoutPage /> },
    ],
  },
]);
