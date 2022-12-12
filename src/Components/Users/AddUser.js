import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const usernameChangeHandler =(event)=>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler =(event)=>{
        setEnteredAge(event.target.value);
    };
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')
    const [error,setError]=useState();
    const addUserHandler =(event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0)
        {
           setError({
            title:'Invalid input',
            message:'Please Enter a valid name and age'
           })
        }
        else if(enteredAge<1)
        {
            setError({
                title:'Invalid age',
                message:'Please Enter a valid age'
               })
        }
        else{
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
        }
    };

    const errorHandler=()=>{
        setError(null)
    }
   


    return (
        <div>
            
        {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
            <label>Age (Years)</label>
            <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type="submit"> Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser;