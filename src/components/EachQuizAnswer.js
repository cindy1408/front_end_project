import React from 'react';
import './EachQuizAnswer.css';
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { updateUserExperience,updateQuizResult } from '../redux/updateQuizSlice';

export default function EachQuizAnswer(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);
    const quizResult = useSelector(state => state.quizResult);
    return (
        <div className='answerOptions'>
            <button type="button" onClick={() => {
                    if(props.questionNum == 0 && props.value == 0){
                        dispatch(updateUserExperience({choice: "Beginner"}));

                        // props.questThree("Indoor")
                        props.nextQuestion()
                        } else {
                            dispatch(updateQuizResult({userId:userId, quizResult: quizResult}));
                            history.push(`/results`);
                        }                      
                    }               
            }><h4>{props.answer}</h4></button>         
        </div>
    )
}

