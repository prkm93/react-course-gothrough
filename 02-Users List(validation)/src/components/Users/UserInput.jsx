import React, { useState } from 'react';
import styles from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from '../UI/Button';


function UserInput(props) {

  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInput(userName, age)) {
        props.onAddUser(userName, age);

        setAge("");
        setUserName("");
    }
  }

  const validateInput = (name,userAge) => {

    if (!name || !userAge) {
      props.onError({
          title: "No inputs",
          message: "Please enter name and age both (non-empty values)"
      });
      return false;
    } else if (!(/[a-z]/i.test(name))) {
      props.onError({
          title: "Invalid name",
          message:"Please enter valid name"
      });
      return false; 
    } else if (!(/\d/.test(age))) {
      props.onError({
        title: "Invalid age",
        message:"Please enter valid age"
    });
      return false;
    } else if (Number(userAge) < 1) {
      props.onError({
          title: "Invalid age",
          message: "Please enter a valid age ( ) > 0)"
      });
      return false;
    } else {
      props.onError({
          title:"",
          message: ""
      });
      return true;
    }

  } 

  return (
    <Card className={styles.input}>
        <form>
            <div className={styles.userInputBox}>
                <label 
                    htmlFor="username" 
                    className={styles.userInputLabel}
                >UserName
                </label>
                <br/>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={userName}
                    className={styles.userInput}
                    onChange={e =>  setUserName(e.target.value)}
                />
            </div>
            <div className={styles.userInputBox}>
                <label 
                htmlFor="age" 
                className={styles.userInputLabel}
                >Age (Years)
                </label>
                <br/>
                <input 
                    type="text" 
                    name="age" 
                    id="age" 
                    value={age}
                    className={styles.userInput}
                    onChange={e => setAge(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                onClick={handleSubmit}
            >
                Add User
            </Button>
        </form>
    </Card>
  );

}

export default UserInput;