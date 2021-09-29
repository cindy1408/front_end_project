import Quiz from './Quiz';

const QuizList = (props) => {
    var quizQuestions = [
        "What level gardener would you count yourself as?", 
        "How much effort are you looking to put in?", 
        "Will your new budDy be living inside or outside?"
    ]

    var quizAnswers = [
        ["Total Beginner", "Intermediate", "Expert"], 
        ["Almost no effort, the plant should practically look after itself", 
        "A medium amount of effort, I need to feel needed by the plant", "I want a challenge"], 
        ["Inside! I'm looking for a new roommate", "Outside, where plants belong"]     
    ]

    let quizComponents = [];

    for(let i=0; i < quizQuestions.length; i++){
        let eachQuiz = quizQuestions[i];
        let eachSetAnswer = quizAnswers[i];
        console.log(eachQuiz)
        console.log(eachSetAnswer)
        let quizComponent = <Quiz questions={eachQuiz} setAnswers={eachSetAnswer}/>
        quizComponents.push(quizComponent);
    }

    return (
        <div>
            {quizComponents}
        </div>
    )
}

export default QuizList;