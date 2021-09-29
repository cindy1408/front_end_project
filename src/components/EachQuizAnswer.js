import React from 'react';
import './EachQuizAnswer.css';

export default function EachQuizAnswer(props) {
    return (
        <div className='answerOptions'>
            <button><h4>{props.answer}</h4></button>          
        </div>
    )
}
