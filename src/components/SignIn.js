import React from 'react'
import './SignIn.css'
import { Link } from "react-router-dom";


export default function OldUser(){
    return(
        <form className="background">
            <div className="container">
                <h1> Sign in now! </h1>
                <div className="label">
  <label>
    Username
    <input type="text" name="username" /> 
  </label>
  <label>
    Password
      <input type="password" name="password" /> 
   </label> 
   </div> 
  <input className= "submit"type="submit" value="Submit" />
  <div className="Register"><h6><Link to="./register">Don't have an account? Register now</Link></h6></div>
  </div>
</form>
    )
}