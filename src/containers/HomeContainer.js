import React from 'react';
import QuizList from '../components/QuizList';
import Home from '../components/Home';
import QuizContainer from '../containers/QuizContainer';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            userId: 0
        }
        this.startQuiz = this.startQuiz.bind(this);
    }

    // componentDidMount(){
    //     this.getQuizResult;
    // }

    startQuiz(){
        const quizResult = {
            userExperience: null,
            plantExperience: null,
            plantType: null,
            plantId_1: 0,
            plantId_2: 0,
            plantId_3: 0
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
        <QuizContainer userId={this.state.userId} />

        return (
            <div>
                <Home startQuiz={this.startQuiz} />
            </div>
        )
    }
}

export default HomeContainer;