import "./NavbarStyle.css"

import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
  return (
    <div className="header">

            <Bounce left><h1>bibliophile</h1></Bounce>
            
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/Categories">Categories</Link>
            </li>
            <li>
                <Link to="/Sign">Sign-In</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes size={20} style={{color:"#fff"}} />
            ):(
                <FaBars size={20} style={{color:"#fff"}} />
            )
        }
            
            
        </div>
    </div>
  )
}

export default Navbar