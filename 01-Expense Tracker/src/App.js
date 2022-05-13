import React, { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  // DIFFERENCE BETWEEN IMPERATIVE AND DECLRATIVE  APPROACH
  // This is an imperative approach because we  have to give clear instructions about what JS and browser need to do.
  // const para = document.createElement('p');
  // para.textContent = "This is a paragraph";
  // document.getElementById('root').append(para);
  
  const [expenses, setExpenses] = useState(initialExpenses);

  // This is under the hood code created when we write some JSX. 
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Lets get started"), 
  //   React.createElement(ExpenseList, { expenses })
  // );

  const addNewExpenseHandler = (expense) => {
    // const tempExpenses = [...expenses];
    // tempExpenses.push(expense);
    // console.log(tempExpenses);
    // setExpenses(tempExpenses);

    // clean way to update state
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addNewExpenseHandler}/>
      <ExpenseList 
        expenses={expenses} 
      />
    </div>
  );
}

export default App;
