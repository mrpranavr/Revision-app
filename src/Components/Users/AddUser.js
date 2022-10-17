import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "./Button";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }

        if(+enteredAge < 1){
            return;
        }
        
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangedHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input value={enteredUsername} id="username" type="text" onChange={usernameChangedHandler}></input>

                <label htmlFor="age">Age (Years)</label>
                <input value={enteredAge} id="age" type="number" onChange={ageChangedHandler}></input>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
