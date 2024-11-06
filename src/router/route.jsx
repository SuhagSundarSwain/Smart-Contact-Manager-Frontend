import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { combineLoader, loginStatusLoader } from "./loader";
import MiddleSection from "../components/middle-section/MiddleSection";
import HomePage from "../components/middle-section/body/HomePage";
import AboutPage from "../components/middle-section/body/AboutPage";
import ServicePage from "../components/middle-section/body/ServicePage";
import ContactPage from "../components/middle-section/body/ContactPage";
import AuthPage from "../components/middle-section/LoginSignupPage/AuthPage";
import LoginPage from "../components/middle-section/LoginSignupPage/Login/LoginPage";
import SignUpPage from "../components/middle-section/LoginSignupPage/SignUp/SignUpPage";
import LogoutPage from "../components/middle-section/LoginSignupPage/LogoutPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: combineLoader,
    children: [
      {
        // path: "/",
        element: <MiddleSection />,
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
        ],
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
