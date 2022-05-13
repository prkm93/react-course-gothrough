import React, { useState } from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [showform, setShowForm] = useState(false);

  const onSaveExpenseHandler = (data) => {
    const expenseData = {
        id: Math.random().toString(),
        ...data
    }
    
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
        {
            showform ?
            <ExpenseForm 
                onSaveExpense={onSaveExpenseHandler} 
                onCancel={setShowForm}
            />
            : 
            <button onClick={() => setShowForm(true)}>Add New Expense</button>
        }
    </div>
  );
}

export default NewExpense;