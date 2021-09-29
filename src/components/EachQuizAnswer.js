import React from 'react';
import './EachQuizAnswer.css';
import { Link } from "react-router-dom";
import Results from './Results';

export default function EachQuizAnswer(props) {

    function finishedQuiz(){
        <Link to='./results'>Finished!</Link>
    }

    return (
        <div className='answerOptions'>
            <button type="button" onClick={() => {
                    if(props.questionNum < 2){
                        props.nextQuestion()
                        }
                        finishedQuiz();
                    }               
            }><h4>{props.answer}</h4></button>         
        </div>
    )
}
