import React from 'react';
import Quiz from '../components/Quiz';
import QuizList from '../components/QuizList';

class QuizContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            userId: 0, 
            userExperience: null, 
            plantExperience: null, 
            plantType: null, 
            plantId_1: 0,
            plantId_2: 0,
            plantId_3: 0,
        }
    }
    updateUserExperience(updateUserExperience){
        fetch(`http://localhost:8000/buddy/quizResults/updateUserExperience/${this.state.userId}`, {
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(updateUserExperience)
        })
        this.setState({userExperience: updateUserExperience})
    }

    render(){
        return (
            <div>
                {/* handleNewUser={this.state.userId}  */}
                <QuizList />
            </div>
        )
    }
}

export default QuizContainer; 