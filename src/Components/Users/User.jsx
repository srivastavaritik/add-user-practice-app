import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./Users.module.css";
import Button from "../Button/Button";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title : 'Invalid Input',
            message : 'Please enter a valid name and age(non-empty values)'
        });
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title : 'Invalid Age',
            message : 'Please enter valid age(>0)'
        });
        return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal onOkay={errorHandler} title={error.title} message={error.message} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default User;
