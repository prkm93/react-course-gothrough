import useInput from "../hooks/use-input";

const BasicForm = () => {

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => {
    let re = /\S+@\S+\.\S+/;
    return re.test(value);
  });

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameHasError ? 'form-control invalid': 'form-control'}>
          <label htmlFor='firstName'>First Name</label>
          <input 
            type='text' 
            id='firstName' 
            onChange={firstNameHandler} 
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter first name.</p>}
        </div>
        <div className={lastNameHasError ? 'form-control invalid': 'form-control'}>
          <label htmlFor='lastName'>Last Name</label>
          <input 
            type='text' 
            id='lastName' 
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter last name.</p>}
        </div>
      </div>
      <div className={emailHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='text' 
          id='email'
          onChange={emailInputHandler} 
          onBlur={emailBlurHandler}
          />
          {emailHasError && <p className="error-text">Please enter valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
