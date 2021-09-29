import React from 'react'
import EachQuizAnswer from './EachQuizAnswer';

export default function Quiz(props) {
    let eachQuestion = props.questions;
    let eachQuestionComponent =  <div>
                                 <h4>{props.questions}</h4>       
                                </div>
    let quizComponents = [];
    quizComponents.push(eachQuestionComponent);
    
    for(let i=0; i < props.setAnswers.length; i++){ 
        let eachAnswer = props.setAnswers[i];
        let quizAnswerComponent = <EachQuizAnswer answer={eachAnswer}/>
        quizComponents.push(quizAnswerComponent);
    }

    return (
        <div>
           {quizComponents}
        </div>
    )
}
