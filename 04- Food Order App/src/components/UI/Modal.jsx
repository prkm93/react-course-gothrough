import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
};

const portalElement = document.getElementById('overlays');

const Modal =(props) => {

  return (
    <>
      {
        ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)
      }
      {
        ReactDOM.createPortal(
          <ModalOverlay onClick={() => props.onCartClick(false)}>{props.children}</ModalOverlay>, 
          portalElement
        )
      }
    </>
  )
}

export default Modal;