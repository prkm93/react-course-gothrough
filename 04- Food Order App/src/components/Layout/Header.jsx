import React from 'react';
import styles from  "./Header.module.css";
import mealsImage from "../../assets/meals.jpeg";
import HeaderCartButton from './HeaderCartButton';
 
const Header = (props) => {

  return (
    <>
      <header className={styles.header}>
          <h2>ReactMeals</h2>
          <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={styles['main-image']}>
          <img src={mealsImage} alt="a table full of delicious food"/>
      </div>
    </>
  )
}

export default Header;