import React from 'react'
import PlantsContainer from '../containers/PlantsContainer'
import { Link, Redirect } from "react-router-dom";

export default function Home(props) {
    return (
        <div>
            <h1>Welcome to the home page</h1>
            <Link to="/plants">View All Plants</Link>
        </div>
    )
}
