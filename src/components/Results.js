import React from 'react'
import './Results.css'
import demo from "./demoimage.jpg" 
import { Link } from "react-router-dom";

export default function Results() {
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
            </div>
        </aside>
        <main class="page-main">
            <div class="content">
                <img src ={demo} alt="plant photo result" class="responsive"/>
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
