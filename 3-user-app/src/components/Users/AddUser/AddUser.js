import { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter in both name and age."
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be greater than 1"
      })
      return
    }

    const userData = {
      key: Math.random().toString(),
      name: enteredUsername,
      age: +enteredAge
    }; 

    props.onAddUser(userData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const dismissModalHandler = (event) => {
    setError()
  }

  return (
    <div>    
      {error && <ErrorModal title={error.title} message={error.message} onClick={dismissModalHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
