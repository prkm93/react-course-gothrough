import React, { useState } from "react";
import ErrorMessage from "./components/UI/ErrorMessage";
import UserInput from "./components/Users/UserInput";
import UserList from "./components/Users/UserList";

function App() {


  const [userLists, setUserLists] = useState([]);
  const [errorMessage, setErrorMessage] =  useState({
    title: "",
    message:""
  });

  const addUserHandler = (name, age) => {

    setUserLists(prevState => {
      return [...prevState, {name, age, id: Math.random().toString()}]
    });
    
  }


  return (
    <div>
      <UserInput 
        onAddUser={addUserHandler} 
        onError={setErrorMessage}
      />
      <UserList userLists={userLists}/>
      <ErrorMessage 
        error={errorMessage}
      />
    </div>
  );
}

export default App;
