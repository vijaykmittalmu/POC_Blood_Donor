import React, { createContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import DonorLists from "../pages/Donors";
import Home from "../pages/Home";
import TitleProvider from "../context/TitleContext";
import { RootLayout } from "../components";
import ContactUs from "../pages/ContactUs";
import SearchDonor from "../pages/SearchDonor";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ForgotPassword from "../pages/ForgotPassword";
import { AuthLoader } from "./auth";

export const TitleContext = createContext<any>({ title: "" });

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <TitleProvider>
        <RootLayout />
      </TitleProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donors",
        loader: AuthLoader,
        element: <DonorLists />,
      },
      {
        path: "/search-donors",
        loader: AuthLoader,
        element: <SearchDonor />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Registration />,
  },
  {
    path: "/auth/reset-password",
    element: <ForgotPassword />,
  },
]);
