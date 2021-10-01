import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getUserId, startQuiz} from '../redux/getUserIdSlice'

export default function StartQuiz(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(startQuiz());
                // props.start();
                history.push('/quiz');
                dispatch(getUserId());
            }
            }>Start Quiz!</button>

        </div>
    )
}
