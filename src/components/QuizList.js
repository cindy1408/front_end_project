import Quiz from './Quiz';
import './QuizList.css';

const QuizList = (props) => {

    var quizQuestions = [
        "What level gardener would you count yourself as?", 
        "How much effort are you looking to put in?", 
        "Will your new budDy be living inside or outside?", 
        "FINSIHED"
    ]

    var quizAnswers = [
        ["Total Beginner", "Intermediate", "Expert"], 
        ["Almost no effort, the plant should practically look after itself", 
        "A medium amount of effort, I need to feel needed by the plant", "I want a challenge"], 
        ["Inside! I'm looking for a new roommate", "Outside, where plants belong"], 
        []     
    ]

    let quizComponents = [];

    for(let i=0; i < quizQuestions.length; i++){
        let eachQuiz = quizQuestions[i];
        let eachSetAnswer = quizAnswers[i];
        let quizComponent = <Quiz 
                                key={i} 
                                questions={eachQuiz} 
                                setAnswers={eachSetAnswer} 
                                questionNum={props.questionNum} 
                                nextQuestion={props.nextQuestion} questionThree={props.questionThree}
                                userExperience={props.userExperience}
                                userId={props.userId}
                                quizResult={props.quizResult} />
        quizComponents.push(quizComponent);
    }

    return (
        <div className='quizPage'>
            {quizComponents[props.questionNum]}
        </div>
    )
}

export default QuizList;