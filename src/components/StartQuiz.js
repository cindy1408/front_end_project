import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export default function StartQuiz(props) {
    const history = useHistory();
    
    function start(){
        props.startQuiz();
    }
    return (
        <div>
            <button onClick={() => {
                start();
                history.push('/quiz');
            }
            }>Start Quiz!</button>

        </div>
    )
}
