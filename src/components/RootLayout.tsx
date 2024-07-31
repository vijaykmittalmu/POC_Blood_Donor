import React from "react";
import { NavBar, Banner, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { useTitle } from "../context/TitleContext";

const RootLayout = () => {
  const { title } = useTitle();

  return (
    <div className="App">
      <NavBar />
      <Banner title={title} />
      <Outlet />
      <Footer />
    </div>
  );
};

export { RootLayout };
