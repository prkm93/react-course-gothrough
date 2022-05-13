import React, { useState } from 'react';
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpense, onCancel }) => {

  const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: ""
  });

  const handleSubmit = (e) => {
      
    e.preventDefault();

    const allDetails = {
        title: userInput.enteredTitle,
        amount: +userInput.enteredAmount,
        date: new Date(userInput.enteredDate)
    };

    onSaveExpense(allDetails);

    onCancel(false);

    setUserInput({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });
  }

  return (
    <form>
            <div>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        value={userInput.enteredTitle}
                        onChange={(e) => setUserInput(prevState => {
                            return {
                                ...prevState, 
                                enteredTitle : e.target.value
                            }
                        })}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={userInput.enteredAmount}
                        onChange={(e) => setUserInput(prevState => {
                            return {
                                ...prevState, 
                                enteredAmount : e.target.value
                            }
                        })}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31"
                        value={userInput.enteredDate}
                        onChange={(e) => setUserInput(prevState => {
                            return {
                                ...prevState, 
                                enteredDate : e.target.value
                            }
                        })}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={() => onCancel(false)}>Cancel</button>
                <button type='submit' onClick={(e) => handleSubmit(e)}>Add Expense</button>
            </div>
        </div>
    </form>
  )
}

export default ExpenseForm;