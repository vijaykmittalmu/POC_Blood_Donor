import { FC } from "react";
import avatar from "../styles/images/avatar.jpg";

interface DonorListsProps {
  title: string;
}

const DonorLists: FC<DonorListsProps> = ({ title = "" }) => {
  return (
    <section>
      <section>
        <img src={avatar} alt="avatar" />
        <section>
          <p>John Doe</p>
          <p>A+</p>
          <p>Delhi</p>
        </section>
      </section>
      <p>
        Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum ipsum Loreum
        ipsum Loreum ipsum Loreum ipsum{" "}
      </p>
    </section>
  );
};

export default DonorLists;
