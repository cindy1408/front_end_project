import React from 'react'
import { useHistory } from 'react-router-dom'

export default function StartQuiz(props) {
    const history = useHistory();
    return (
        <div>
            <button onClick={() => {
                props.start();
                history.push('/quiz');
            }
            }>Start Quiz!</button>

        </div>
    )
}
