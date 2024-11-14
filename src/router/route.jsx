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
import User from "../components/middle-section/body/user/User";

// Define user-related routes as a separate constant for readability
const userRoutes = [
  { path: "dashboard", element: <>Dashboard</> },
  { path: "contacts", element: <>Contacts</> },
  { path: "add contact", element: <>Add Contact</> },
];

// Define auth-related routes as a separate constant for readability
const authRoutes = [
  { path: "login", element: <LoginPage /> },
  { path: "sign-up", element: <SignUpPage /> },
];

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: combineLoader,
    children: [
      {
        element: <MiddleSection />,
        children: [
          { index: true, element: <Navigate to="/home" replace /> }, // Redirect "/" to "/home"
          { path: "home", element: <HomePage /> },
          { path: "about", element: <AboutPage /> },
          { path: "service", element: <ServicePage /> },
          { path: "contact", element: <ContactPage /> },
          {
            path: "user",
            element: <User />,
            loader: loginStatusLoader,
            children: userRoutes, // Use predefined userRoutes array
          },
        ],
      },
      {
        path: "auth",
        element: <AuthPage />,
        loader: loginStatusLoader,
        children: authRoutes, // Use predefined authRoutes array
      },
      { path: "logout", element: <LogoutPage /> },
      { path: "*", element: <>404 - Page Not Found</> }, // Fallback route for undefined paths
    ],
  },
]);
