import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onOkay}>
        <Card className={styles.modal}>
          <header className={styles.header}>{props.title}</header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onOkay}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
