import React, { useState  } from 'react'
import Card from './Card';
import Button from "./Button";
import styles from "./ErrorMessage.module.css";
import { useEffect } from 'react';


function ErrorMessage(props) {

  console.log("props", props);
  const { title, message } = props.error;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.error.title) {
      setShow(true);
    }
  }, [props.error]);

  return (
      show
        &&
      <div className={styles.backdrop} onClick={() => setShow(false)}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <div className={styles.content}>
            <p>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={() => setShow(false)}>Okay</Button>
          </footer>
        </Card>
      </div>
  );
}

export default ErrorMessage;