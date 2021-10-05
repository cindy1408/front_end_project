import React from 'react';
import './EachQuizAnswer.css';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateUserExperience, updatePlantType, updateQuizResult, updatePlantExperience } from '../redux/updateQuizSlice';

export default function EachQuizAnswer(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    
    function postUserResponse(){
        if(props.questionNum == 0 && props.value == 0){
             dispatch(updateUserExperience({choice: "Beginner"}));
              props.nextQuestion()
            
        } else if (props.questionNum == 0 && props.value == 1){
            dispatch(updateUserExperience({choice: "Intermediate"}))
            props.nextQuestion();
            
        } else if (props.questionNum === 0 && props.value == 2){
            dispatch(updateUserExperience({choice: "Advanced"}))
            props.nextQuestion();
        } else if(props.questionNum === 1 && props.value === 0){
            dispatch(updatePlantExperience({choice: "Beginner"}))
            props.nextQuestion();
        } else if (props.questionNum === 1 && props.value === 1){
            dispatch(updatePlantExperience({choice: "Intermediate"}))
            props.nextQuestion();
        } else if (props.questionNum === 1 && props.value === 2){
            dispatch(updatePlantExperience({choice: "Advanced"}))
            props.nextQuestion();
        } else if (props.questionNum === 2 && props.value === 0) {
            dispatch(updatePlantType({choice: "Indoor"}))
            history.push(`/results`);
        } else if (props.questionNum == 2 && props.value == 1) {
            dispatch(updatePlantType({choice: "Outdoor"}))
            history.push(`/results`);
        } 
        dispatch(updateQuizResult);                 
    }

    return (
        <div className='answerOptions'>
            <button type="button" 
                    onClick={() => { postUserResponse()} }>
                        <h4>{props.answer}</h4>
            </button>         

        </div>  
    )
}

