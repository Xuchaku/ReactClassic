import Form from "../Form/Form";
import classes from "./Modal.module.css";
import { useState } from "react";
import Button from "../Button/Button";
import { memo } from "react";
const Modal = memo(function Modal({ posts, create }) {
  const [modal, setModal] = useState(false);
  function showModalHandler(value) {
    setModal(value);
  }
  return (
    <>
      <Button onClick={showModalHandler.bind(null, true)}>Create Post</Button>
      {modal ? (
        <div className={classes.ModalBackground}>
          <Form
            show={showModalHandler.bind(null, false)}
            posts={posts}
            create={create}
          ></Form>
        </div>
      ) : null}
    </>
  );
});
export default Modal;
