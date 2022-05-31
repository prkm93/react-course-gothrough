import React from 'react';
import styles from "./MealItem.module.css";
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

  const { id, name, description, price } = props.meal;

  return (
    <li className={styles.meal}>
      <div>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
      <MealItemForm id={id}/>
    </li>
  )
}

export default MealItem;