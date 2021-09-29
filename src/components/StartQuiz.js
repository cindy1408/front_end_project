import React from 'react'
import { Link } from "react-router-dom";

export default function StartQuiz() {
    return (
        <div>
            <Link to='./quiz'>Start Quiz!</Link>
        </div>
    )
}
