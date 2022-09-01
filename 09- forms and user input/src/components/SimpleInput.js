 import useInput from "../hooks/use-input";

const SimpleInput = () => {
  
  const { 
    value : enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    inputChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => {
    let re = /\S+@\S+\.\S+/;
    return re.test(value);
  });

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    console.log(enteredEmail);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputHasError ? 'form-control invalid' : 'form-control '}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' 
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
         {nameInputHasError && <p className="error-text">Name mustn't be empty.</p>} 
      </div>
      <div className={emailInputHasError ? 'form-control invalid' : 'form-control '}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email' 
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
         {emailInputHasError && <p className="error-text">Please enter valid email.</p>} 
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
