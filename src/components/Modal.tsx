import { FC } from "react";
import { ListItemProps } from "./ListItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export interface ModalContainerProps extends ListItemProps {
  closeModalHandler?: any;
}

const ModalContainer: FC<ModalContainerProps> = ({
  user,
  open,
  closeModalHandler,
}) => {
  return (
    <Modal show={open}>
      <Modal.Header>
        <Modal.Title>
          {user.name} (<b className="main-color">{user.blood_group}</b>)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hi! I am{" "}
        <strong>
          <i>{user.name}</i>
        </strong>
        , located in{" "}
        <strong>
          {user.location?.city}, {user.location?.state}
        </strong>
        .
        <br />
        <br />
        {user.description}
        <br />
        <br />
        <Button variant="primary">Request</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModalHandler(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ModalContainer };
