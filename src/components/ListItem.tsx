import React, { FC, useState } from "react";
import avatar from "../styles/images/male.png";
import ReactDOM from "react-dom";
import { ModalContainer, ModalContainerProps } from "./Modal";

const container: HTMLElement | null = document.getElementById("modal-root");
export interface ListItemProps {
  user: {
    name: string;
    location?: {
      city?: string;
      state?: string;
      latitude?: number;
      longitude?: number;
    };
    blood_group?: string;
    gender?: string;
    profile_image?: string;
    description?: string;
  };
  open?: boolean;
}
const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false);
  const modalHandler = () => {
    setOpen(!open);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="donor-list" onClick={modalHandler}>
        <section className="user-info">
          <img src={avatar} alt="avatar" />
          <section>
            <p>
              <span>{user.name}</span> (<b>{user.blood_group}</b>)
            </p>
            <p>{user.gender}</p>
            <p className="location">{`${user.location?.city}, ${user.location?.state}`}</p>
          </section>
        </section>
        <p className="description">
          <i>{user.description}</i>
        </p>
      </section>
      {open && (
        <ModalComponent
          user={user}
          open={open}
          closeModalHandler={modalHandler}
        />
      )}
    </>
  );
};

export default ListItem;

const ModalComponent: FC<ModalContainerProps> = ({
  user,
  open,
  closeModalHandler,
}) => {
  if (!container) {
    return null;
  }
  return ReactDOM.createPortal(
    <ModalContainer
      user={user}
      open={open}
      closeModalHandler={closeModalHandler}
    />,
    container
  );
};
