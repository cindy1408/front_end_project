import React from 'react';
import QuizList from '../components/QuizList';
class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            questionNum: 0
        }
       
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
                    questionThree={this.updateQuizResultPlantType} 
                    userExperience={this.props.userExperience}
                    userId={this.props.userId}
                    />
            </div>
        )
    }
}

export default QuizContainer;