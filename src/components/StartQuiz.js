import React from 'react'
import { Link } from "react-router-dom";

export default function StartQuiz(props) {
    return (
        <div>
            <Link to='./quiz'><button onClick={() => props.startQuiz}>Start Quiz!</button></Link>
        </div>
    )
}
