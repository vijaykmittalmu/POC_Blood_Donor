import React, { FC, useState } from "react";
import { NavBar, Banner, Footer } from "../components";

interface RootLayoutProps {
  children: React.ReactNode;
  classes?: string;
}

const RootLayout: FC<RootLayoutProps> = ({ classes, children }) => {
  const [bannerTitle, setBannerTitle] = useState("");

  React.useEffect(() => {
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        setBannerTitle(child.props.title);
      }
    });
  }, [children]);

  return (
    <div className={classes}>
      <NavBar />
      <Banner title={bannerTitle} />
      {children}
      <Footer />
    </div>
  );
};

export { RootLayout };
