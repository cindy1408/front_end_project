import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <ul>
    <li><Link to="./">Home</Link></li>
    <li><Link to="./quiz">Quiz</Link></li>
    <li><Link to="./plants">Plants</Link></li>
    </ul>
    )
    }

export default NavBar;