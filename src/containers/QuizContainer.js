import React from 'react';
import QuizList from '../components/QuizList';
class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            questionNum: 0
        }
    this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion(){
        let i = this.state.questionNum;
        this.setState({questionNum: i+1})
    }
    render(){

        return (        
            <div>
                <QuizList 
                    questionNum={this.state.questionNum} 
                    nextQuestion={this.nextQuestion} 
                    />
            </div>
        )
    }
}

export default QuizContainer;