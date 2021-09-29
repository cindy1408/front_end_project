class QuizContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            userId: null,
            quizResult: {
                userExperience: null,
                plantExperience: null,
                plantType: null,
                plantId_1: 0,
                plantId_2: 0,
                plantId_3: 0
            }
        }
    }

    componentDidMount(){
        this.getQuizResult;
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
        return(
            <>
            
            </>
        )
    }
}