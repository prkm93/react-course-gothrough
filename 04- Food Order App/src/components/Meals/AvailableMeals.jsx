
import React from 'react';
import MealsSummary from "./MealsSummary";
import styles from "./AvailableMeals.module.css";
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
];


const AvailableMeals = () => {

  const mealLists =  (
      DUMMY_MEALS.length && DUMMY_MEALS.map(item => {
        return (<MealItem key={item.id} meal={item}/>)
      })
  )

  return (
    <section className={styles.meals}>
      <Card>
       <ul>{mealLists}</ul> 
      </Card>
    </section>
  );
}

export default AvailableMeals;
