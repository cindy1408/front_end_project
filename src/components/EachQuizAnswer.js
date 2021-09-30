import React from 'react';
import './EachQuizAnswer.css';
import { useHistory } from 'react-router-dom'

export default function EachQuizAnswer(props) {
    const history = useHistory();

    return (
        <div className='answerOptions'>
            <button type="button" onClick={() => {
                    if(props.questionNum < 2){
                        props.nextQuestion()
                        } else {
                            history.push(`/results`);
                        }                      
                    }               
            }><h4>{props.answer}</h4></button>         
        </div>
    )
}
