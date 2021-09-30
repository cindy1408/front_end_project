import React from 'react'
import {Link} from "react-router-dom"
import NavBar from './Nav'
import "./Home.css"
import StartQuiz from "./StartQuiz"

const path = process.env.PUBLIC_URL;

export default function Home(props) {
    return (
    <div className="home-container" style={{ backgroundImage: `url(${path}/assets/home-bg.jpg)`,  backgroundSize: "cover", height:"100vh", backgroundPosition:"center"}}>
      <NavBar/>
      <section>
      <div className="background" >
        <div className="left">
          <h1>BUD.DY</h1>
          <p>—A short introduction to botany</p>
          </div>
        <div className="right">
          <div className="content">
            <p>Matching you with a best Bud</p>
           <StartQuiz />
          </div>
        </div>
      </div>
      </section>
            
        </div>
    )
}
