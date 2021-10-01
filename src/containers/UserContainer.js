import React from 'react';
import NewUser from '../components/UserRegister';
class UserContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            users: []
        }

        this.addNewUser = this.addNewUser.bind(this);
    }

    componentDidMount(){
        this.getUsers();
    }

    getUsers(){
        fetch("http://localhost:8082/buddy/users")
            .then((response) => response.json())
            .then(data => this.setState({ users: data, loaded: true }))
            .catch(error => console.log(error))
    }

    addNewUser(newUser){
        fetch("http://localhost:8082/buddy/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newUser)
        })

        const updatedUsers = [...this.state.users, newUser];
        this.setState({users:updatedUsers});
    }

    render(){
        return(
            <>
            <NewUser handleUserSubmission={this.addNewUser} />
            {/* <div>{this.state.users}</div> */}
            </>
        )
    }
}

export default UserContainer;