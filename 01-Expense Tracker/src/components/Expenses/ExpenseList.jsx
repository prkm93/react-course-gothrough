import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";
import ExpensesChart from './ExpenseChart';

const ExpenseList =({ expenses }) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const yearFilterHandler = (val) => {
    setFilteredYear(val);
  }

  const filteredExpenses = expenses.filter(item => item.date.getFullYear().toString() === filteredYear); 

  return (
    <Card className="expenses">
      <ExpensesChart filteredExpenses={filteredExpenses}/>
        <ExpensesFilter onFilterChange={yearFilterHandler} selected={filteredYear}/>
        {
            filteredExpenses.length 
            ? 
            filteredExpenses.map(item => {
                return <ExpenseItem key={item.id} expense={item} />
            })
            : 
            <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        }
    </Card>
  )
};

export default ExpenseList;