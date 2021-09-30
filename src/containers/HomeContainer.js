import React from 'react';
import QuizList from '../components/QuizList';
import Home from '../components/Home';
import QuizContainer from '../containers/QuizContainer';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userId: 0,
            questionNum: 0, 
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.startQuiz = this.startQuiz.bind(this);
    }

    // componentDidMount(){
    //     this.getQuizResult;
    // }

    nextQuestion(){
        let i = this.state.questionNum;
        this.setState({questionNum: i+1})
    }

    startQuiz(){
        try{
            fetch("http://localhost:8080/buddy/quizResults", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'
                     },
            body: JSON.stringify(this.state.quizResult)
        })

        fetch("http://localhost:8080/buddy/quizResults")
        .then((response) => response.json())
        .then(data => this.setState({userId: data[data.length-1].id}))
        } catch (error) {
            console.log(error);
        }
    }

    getQuizResult(){
        fetch(`http://localhost:8080/buddy/quizResults/getTopThree/${this.state.userId}`)
        .then((response) => response.json())
        .then(data => this.setState({loaded: true, quizResult: data}))
        .catch(error => console.log(error));
    }

    // updateQuizResultPlantType(plantType){
    //     const updatedQuizResult = this.state.quizResult;
    //     updatedQuizResult.plantType = plantType;

    //     this.setState({quizResult: updatedQuizResult})
    //     fetch(`http://localhost:8080/buddy/quizResults/updatePlantType/${this.state.userId}`, {
    //         method: "PUT", 
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(this.state.quizResult)
    //     })
    // }

    updateQuizResultUserExp(userExperience){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.userExperience = userExperience;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/buddy/quizResults/updateUserExperience/${this.state.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })
    }

    updateQuizResultPlantExp(plantExperience){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.plantExperience = plantExperience;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/buddy/quizResults/updatePlantExperience${this.state.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.quizResult)
        })
    }


    render(){

        <QuizContainer 
            userId={this.state.userId} 
            quizResult={this.state.quizResult} />

        return (
            <div>
                <Home startQuiz={this.startQuiz} />
            </div>
        )
    }
}

export default HomeContainer;