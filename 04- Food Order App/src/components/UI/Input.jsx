import React from 'react';
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.label}>{props.label}</label>
      <input 
        {...props.input}
      />
    </div>
  );
}

export default Input;