import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={styles.backdrop}/>
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
};

const Modal =(props) => {

  const portalElement = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(<BackDrop/>, portalElement)}
      {
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>, 
          portalElement
        )
      }
    </>
  )
}

export default Modal;