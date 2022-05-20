import React from 'react';
import CartIcon from '../Cart/CartIcon';
import styles from  "./HeaderCartButton.module.css";

const HeaderButton = () => {
  return (
    <div className={styles.button}>
        <span className={styles.icon}>
         <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
    </div>
  );
}

export default HeaderButton;