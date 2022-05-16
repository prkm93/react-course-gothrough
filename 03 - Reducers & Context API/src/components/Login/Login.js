import React, { 
  useState, 
  useEffect, 
  useContext, 
  useReducer,
  useRef
 } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/authContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {

  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") }
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value,  isValid: state.value.includes("@") }
  }

  return { value: '', isValid: false }
}

const passWordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().lenght > 6 };
  } 

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return {  value: '', isValid: false };
}

const Login = () => {
  
  const authCtx = useContext(AuthContext);
  
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  });
  const [passwordState, dispatchPassword] = useReducer(passWordReducer, {
    value: '',
    isValid: null
  })

  const { isValid: emailIsValid } = emailState;
  const { isValid: passWordIsValid } = passwordState;
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(() => {

    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passWordIsValid);
    }, 500);

    return (() => {
      clearTimeout(timer);
    })

  }, [emailIsValid, passWordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" }); 
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailIsValid}
          type="email"
          label="E-mail"
          id="email"
          value={emailState.value}
          changeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef} 
          isValid={passWordIsValid}
          type="password"
          label="Password"
          id="password"
          value={passwordState.value}
          changeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
