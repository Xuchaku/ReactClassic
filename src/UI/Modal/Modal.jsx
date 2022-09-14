import { useState } from "react";
import { memo } from "react";
import Form from "../Form/Form";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = memo(function Modal() {
  const [modal, setModal] = useState(false);
  function showModalHandler(value) {
    setModal(value);
  }
  return (
    <>
      <Button onClick={showModalHandler.bind(null, true)}>Create Post</Button>
      {modal && (
        <div className={classes.ModalBackground}>
          <Form show={showModalHandler.bind(null, false)}></Form>
        </div>
      )}
    </>
  );
});
export default Modal;
