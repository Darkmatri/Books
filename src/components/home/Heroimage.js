
import "./Heroimgstyle.css"
import React from 'react'
import { Fade } from "react-reveal"
import { Link } from "react-router-dom"

const Heroimage = () => {

  return (
    <div className="hero">
        <div>
        <div className="box" />
        <div className="box2" />
        <div className="box3" />
        <div className="bubble" />
        <div className="bubble1" />
        <div className="bubble2" />
        <div className="bubble3" />
        <div className="bubble4" />
          <img className="intro" src="assets/intro-bg.jpg"  alt=" " />
        </div>
        <div className="content">
          <Fade top><p>Hi, Welcome to<br/></p></Fade>
          <Fade bottom><h2>bibliophile</h2></Fade>       
          <div>
          <Link to="/Categories"><button className="btn">Welcome to <br></br> WORLD OF BOOKS</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Heroimage