import React from 'react';
import Home from '../components/Home';
import QuizContainer from '../containers/QuizContainer';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userId: 0,
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
        this.startQuiz = this.startQuiz.bind(this);
        this.updateQuizResultUserExp = this.updateQuizResultUserExp.bind(this);
    }

    // componentDidMount(){
    //     this.getQuizResult;
    // }

    startQuiz(){

        try{
            fetch("http://localhost:8080/buddy/quizResults", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'
                     },
            body: JSON.stringify(this.state.quizResult)
        }) } catch (error) {
            console.log(error)
        }
        try{
            fetch("http://localhost:8080/buddy/quizResults")
            .then((response) => response.json())
            .then(data => this.setState({userId: data[data.length-1].id}))
        } catch (error) {
            console.log(error);
        }
        fetch("http://localhost:8082/buddy/quizResults", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'
                    },
        body: JSON.stringify(quizResult)
        })

        fetch("http://localhost:8082/buddy/quizResults")
        .then((response) => response.json())
        .then(data =>  this.setState({userId: data[data.length-1].id}))
        .catch (error => console.log(error)) 

   
    }


    render(){

        <div>
            <QuizContainer 
                userId={this.state.userId} 
                quizResult={this.state.quizResult}
                userExperience={this.updateQuizResultUserExp} />
{/*         
            <QuizList 
                userId={this.state.userId} 
                quizResult={this.state.quizResult}
                userExperience={this.updateQuizResultUserExp} /> */}
        </div>

        return (
            <div>
                <Home startQuiz={this.startQuiz} />
            </div>
        )
    }
}

export default HomeContainer;