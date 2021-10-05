import React from 'react'
import './Results.css'
import { Link } from "react-router-dom";
var plant = 'birdsOfParadise.jpg';


export default function Results() {
    var path = process.env.PUBLIC_URL;
    return (   
    <div class="grid">
        <header class="page-header">
            <div class="content">
                <h1>Congratulations!</h1>
            </div>
        </header>
        <aside class="page-rightbar">
            <div class="content">
                <p>Facts</p>
                <p>- also known as Crane flower</p>
                <p>- there are 5 species</p>
                <p>- native to Southern Afria</p>
                <p>- they bloom from September to May</p>
            </div>
        </aside>
        <main class="page-main">
            <div class="content">
                <img src ={path + plant} alt="plant photo result" className="responsive"></img>
            </div>
        </main>
        <footer class="page-footer">
            <div class="content">
                <h3>Have a Bud.dy day! <Link to="/register"><button class="">Sign In / Register</button></Link> </h3>
            </div>
         </footer>
    </div>  
    )
}
