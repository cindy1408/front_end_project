import {useState} from "react";
import {useSelector} from "react-redux"
import "./UserRegister.css"

const NewUser = (props) => {
    const userExperience = useSelector(state => state.quizResult.userExperience);
    const quizResultID = useSelector(state => state.userId);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showResultId, setShowResultId] = useState(false);
    const onClick = () => {
        if( username != "" && email != "" && password != "" ){
            setShowResultId(true)
        }
    }

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
           
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value={username} onChange={onUsernameChange} />
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value={email} onChange={onEmailChange} />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={onPasswordChange} />
            <input className="submit" type="submit" value="Register" onClick={onClick}/>

            </div>
           

         {showResultId ? 
         <div>
             quiz result ID:
             <p>{quizResultID}</p></div> 
         : null}

        
        </div>
        </form>
      
    )

}


export default NewUser;