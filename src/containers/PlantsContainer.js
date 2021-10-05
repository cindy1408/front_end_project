import React from 'react';
import PlantList from '../components/PlantList';
class PlantsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded: false, 
            plants: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/buddy/plants")
        .then((response) => response.json())
        .then(data => this.setState({plants: data, loaded: true}))
        .catch(error => console.log(error))
    }   
    render(){
        return (
            <div>
                <PlantList plants={this.state.plants}/>
            </div>
        )
    }
}
export default PlantsContainer;
