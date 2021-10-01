import React from 'react';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            users = []
        }
    }

    getUsers(){
        fetch("http://localhost:8082/movies")
            .then((response) => response.json())
            .then(data => this.setState({ movies: data, loaded: true }))
            .catch(error => console.log(error))
    }
}