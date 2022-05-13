import React from 'react';
import  "./Card.css";

// here we defined Card as custom component which has commmon styling  and can be used in both ExpenseList and ExpenseItem.
// Children property helps to create wrapper components.This  is composition.
const Card = (props) => {
  return (
        <div className={`card ${props.className}`} >
            {props.children}
        </div>
  );
}

export default Card;