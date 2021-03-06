import React from 'react'
import EachQuizAnswer from './EachQuizAnswer';
import './Quiz.css';

export default function Quiz(props) {
    let eachQuestionComponent = <div>
                                    <h3>{props.questions}</h3>       
                                </div>
    let quizComponents = [];
    let quizAnswerComponents = [];
    quizComponents.push(eachQuestionComponent);
    
    for(let i=0; i < props.setAnswers.length; i++){ 
        let eachAnswer = props.setAnswers[i];
        let quizAnswerComponent = <EachQuizAnswer 
                                        key={i} 
                                        value={i} 
                                        answer={eachAnswer} 
                                        questionNum={props.questionNum} nextQuestion={props.nextQuestion} questThree={props.questionThree}
                                        userExperience={props.userExperience}
                                        quizResult={props.quizResult}
                                        userId={props.userId} />
        quizAnswerComponents.push(quizAnswerComponent);
    }

    quizComponents.push(<div className='answers'>{quizAnswerComponents}</div>)

    return (
        <div className='quizCard'>
           {quizComponents}
        </div>
    )
}
