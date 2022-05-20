import React, { useState } from 'react';
import styles from  "./Header.module.css";
import Modal from "../UI/Modal";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from './HeaderCartButton';
 
const Header = () => {
  const [showModal, setShowModal]  = useState(false);


  return (
    <>
      {showModal ? <Modal/> : ""}
      <header className={styles.header} onClick={() => setShowModal(true)}>
          <h2>ReactMeals</h2>
          <HeaderCartButton/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt="a table full of delicious food"/>
      </div>
    </>
  )
}

export default Header;