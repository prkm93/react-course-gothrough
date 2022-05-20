import React from "react";
import CartItem from "./components/Cart/CartItem";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

const App = () => {
  return (
    <>
      <Header/>
      <CartItem/>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  );
}

export default App;
