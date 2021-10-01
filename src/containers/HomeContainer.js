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
        }
        // this.startQuiz = this.startQuiz.bind(this);
        // this.updateQuizResultUserExp = this.updateQuizResultUserExp.bind(this);
    }

    // componentDidMount(){
    //     this.getQuizResult;
    // }


    render(){

        <div>
            <QuizContainer 
                userId={this.state.userId} 
                quizResult={this.state.quizResult}
                userExperience={this.updateQuizResultUserExp} />
        </div>

        return (
            <div>
                <Home startQuiz={this.startQuiz} />
            </div>
        )
    }
}

export default HomeContainer;