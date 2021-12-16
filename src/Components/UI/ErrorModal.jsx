import React from "react";
import ReactDom from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "../Button/Button";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onOkay}/>
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
    {ReactDom.createPortal(
      <BackDrop onOkay={props.onOkay} />,
      document.getElementById("backdrop-root")
    )}
    {ReactDom.createPortal(
      <ModalOverlay
        title={props.title}
        message={props.message}
        onOkay={props.onOkay}
      />,
      document.getElementById("overlay-root")
    )}
  </React.Fragment>
  );
};

export default ErrorModal;
