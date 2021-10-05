import React from 'react'
import './StartQuiz.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getUserId, startQuiz} from '../redux/getUserIdSlice'

export default function StartQuiz(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className="quizbutton">
            <button onClick={() => {
                dispatch(startQuiz());
                history.push('/quiz');
                dispatch(getUserId());
            }
            }>Start Quiz!</button>

        </div>
    )
}
