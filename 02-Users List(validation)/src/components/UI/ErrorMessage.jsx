import React, { useState } from 'react';
import ReactDOM  from 'react-dom';
import Card from './Card';
import Button from "./Button";
import styles from "./ErrorMessage.module.css";
import { useEffect } from 'react';


const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {

  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClose}>Okay</Button>
      </footer>
    </Card>
  )
}

const ErrorMessage = (props) => {

  const { title, message } = props.error;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.error.title) {
      setShow(true);
    }
  }, [props.error]);

  const onCloseHandler = () => {
    setShow(false);
  }

  return (
     show
        &&
      <>
       {
          ReactDOM.createPortal(
          <BackDrop onClose={onCloseHandler}/>, 
          document.getElementById('backdrop-root')
          )
        }
       {
         ReactDOM.createPortal(
           <ModalOverlay title={title} message={message} onClose={onCloseHandler}/>,
           document.getElementById('overlay-root')
         )
       }
      </>
  );
}

export default ErrorMessage;