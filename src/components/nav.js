import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

function Navbar() {
    return (
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Quiz</a></li>
    <li><a href="#">Plants</a></li>
    </ul>

        // <nav className="navbar navbar-expand-lg navbar-light">
        //     <div className="container-fluid"> 
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Quiz</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">About</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default Navbar
