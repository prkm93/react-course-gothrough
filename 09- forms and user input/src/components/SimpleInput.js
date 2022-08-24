import { useState, useRef } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();
  
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(true);
      return;
    }

    setEnteredNameIsValid(false);

    console.log(nameInputRef.current.value);
  }

  const nameInputIsInvalid = enteredNameIsValid && enteredNameTouched;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputIsInvalid ? 'form-control invalid' : 'form-control '}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name'
          onChange={nameInputChangeHandler}
        />
         {nameInputIsInvalid && <p className="error-text">Name mustn't be empty.</p>} 
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
