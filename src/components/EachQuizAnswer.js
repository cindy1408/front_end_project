import React from 'react';
import './EachQuizAnswer.css';
import { useHistory } from 'react-router-dom'

export default function EachQuizAnswer(props) {
    const history = useHistory();

    function postUserResponse(){
        if(props.questionNum == 0 && props.value == 0){
            // props.userExperience("Beginner");
            props.nextQuestion();
            
        } else if (props.questionNum == 0 && props.value == 1){
            // props.userExperience("Intermediate");
            props.nextQuestion();
            
        } else if (props.questionNum == 0 && props.value == 2){
            // props.userExperience("Advance");
            props.nextQuestion();
        } else if(props.questionNum == 1 && props.value == 0){
            
            props.nextQuestion();
        } else if (props.questionNum == 1 && props.value == 1){
            
            props.nextQuestion();
        } else if (props.questionNum == 1 && props.value == 2){
            
            props.nextQuestion();
        } else if (props.questionNum == 2 && props.value == 0) {
            
            history.push(`/results`);
        } else if (props.questionNum == 2 && props.value == 0) {
            
            history.push(`/results`);
        }                  
    }

    return (
        <div className='answerOptions'>
            <button type="button" onClick={() => postUserResponse()}><h4>{props.answer}</h4></button>         
        </div>
    )
}
