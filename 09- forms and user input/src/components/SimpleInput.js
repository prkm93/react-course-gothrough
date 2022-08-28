import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== '') {
      setEnteredNameTouched(false);
    }
  }

  const nameInputBlurHandler = () => {

    if (enteredName.trim() === '') {
      setEnteredNameTouched(true);
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputIsInvalid ? 'form-control invalid' : 'form-control '}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' 
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
         {nameInputIsInvalid && <p className="error-text">Name mustn't be empty.</p>} 
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
