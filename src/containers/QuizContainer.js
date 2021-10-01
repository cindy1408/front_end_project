import React from 'react';
import QuizList from '../components/QuizList';
class QuizContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            questionNum: 0,
            userId: this.props.userId,
            quizResult: {
                userExperience: null,
                plantExperience: null,
                plantType: null,
                plantId_1: 0,
                plantId_2: 0,
                plantId_3: 0
            }
        }
       
        console.log(this.props.userId)

        this.nextQuestion = this.nextQuestion.bind(this);
        this.updateQuizResultPlantType = this.updateQuizResultPlantType.bind(this);
    }

    nextQuestion(){
        let i = this.state.questionNum;
        this.setState({questionNum: i+1})
    }

    updateQuizResultPlantType(plantType){
        const updatedQuizResult = this.state.quizResult;
        updatedQuizResult.plantType = plantType;

        this.setState({quizResult: updatedQuizResult})
        fetch(`http://localhost:8080/buddy/quizResults/updatePlantType/${this.props.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.props.quizResult)
        })
    }
    
    render(){
        const userId = this.state.userId;
        {  console.log("quiz container" + this.state.userId)}
        return (
          
            <div>
                <QuizList 
                    questionNum={this.state.questionNum} 
                    nextQuestion={this.nextQuestion} 
                    questionThree={this.updateQuizResultPlantType} 
                    />
            </div>
        )
    }
}

export default QuizContainer;