import React from 'react';
import Quiz from '../components/Quiz';
import QuizList from '../components/QuizList';
import StartQuiz from '../components/StartQuiz';
class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            userId: null,
            questionNum: 0, 
            quizResult: {
                userExperience: null,
                plantExperience: null,
                plantType: null,
                plantId_1: 0,
                plantId_2: 0,
                plantId_3: 0
            }
        }
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    // componentDidMount(){
    //     this.getQuizResult;
    // }

    nextQuestion(){
        let i = this.state.questionNum;
        this.setState({questionNum: i+1})
    }

    startQuiz() {
        fetch("http://localhost:8080/quizResults", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })

        fetch("http://localhost:8080/quizResults")
        .then((response) => response.json())
        .then(data => this.setState({userId: data[data.length-1].id}))
    }

    getQuizResult(){
        fetch(`http://localhost:8080/quizResults/getTopThree/${this.state.userId}`)
        .then((response) => response.json())
        .then(data => this.setState({loaded: true, quizResult: data}))
        .catch(error => console.log(error));
    }

    updateQuizResultPlantType(plantType){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.plantType = plantType;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/quizResults/updatePlantType/${this.state.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })

    }

    updateQuizResultUserExp(userExperience){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.userExperience = userExperience;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/quizResults/updateUserExperience/${this.state.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })

    }

    updateQuizResultPlantExp(plantExperience){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.plantExperience = plantExperience;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/quizResults/updatePlantExperience${this.state.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })

    }


    render(){
        return (
            <div>
                {/* <StartQuiz questionNum={this.state.questionNum} nextQuestion={this.nextQuestion} startQuiz={this.startQuiz}/> */}
                <QuizList questionNum={this.state.questionNum} nextQuestion={this.nextQuestion} />
            </div>
        )
    }
}

export default QuizContainer;