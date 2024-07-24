import { FC } from "react";
import BannarImage from "../styles/images/banner.jpg";

interface BannerProps {
  title: string;
}

const Banner: FC<BannerProps> = ({ title }) => {
  return (
    <section className="banner">
      <img src={BannarImage} width="100%" alt="banner-image" />
      <p className="title">{title}</p>
    </section>
  );
};

export { Banner };
