import {useState} from "react";
import {useSelector} from "react-redux"
import "./UserRegister.css"
import { Link } from "react-router-dom";

const NewUser = (props) => {
    const userExperience = useSelector(state => state.quizResult.userExperience);
    const quizResultID = useSelector(state => state.userId);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onUsernameChange = ((evt) => {
        evt.preventDefault();
        setUsername(evt.target.value);
    })

    const onEmailChange = ((evt) => {
        evt.preventDefault();
        setEmail(evt.target.value);
    })

    const onPasswordChange = ((evt) => {
        evt.preventDefault();
        setPassword(evt.target.value);
    })

    const onUserSubmit = (() => {
        if( username != "" && email != "" && password != "" ){
            const newUser = {
                username: username,
                email: email,
                password: password,
                userExperience: userExperience,
                quizResultID: quizResultID
            }
    
            props.handleUserSubmission(newUser);
            setUsername("");
            setEmail("");
            setPassword("");
        }
       
    })

    return(
        <form className="background" onSubmit={onUserSubmit}>
            <div className="container">
                <h1> Sign up now! </h1>
            <div className="label">
           
            <label for="username">Username  
            <input type="text" id="username" name="username" value={username} onChange={onUsernameChange} />
            </label>
           
            <label for="email">Email  
            <input type="text" id="email" name="email" value={email} onChange={onEmailChange} />
            </label>
           
            <label for="password">Password  
            <input type="password" id="password" name="password" value={password} onChange={onPasswordChange} />
            </label>
            </div>
           
            <input className="submit" type="submit" value="Register"/>
            <div className="Signin">
                <h6><Link to="./signin">Already have an account? Sign in now</Link></h6>
            </div>
            
        </div>
        </form>
      
    )

}


export default NewUser;