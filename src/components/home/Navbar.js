import "./NavbarStyle.css"

import React, {useState} from 'react'
import Bounce from 'react-reveal/Bounce';

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
  return (
    <div className="header">

            <Bounce left><h1>bibliophile</h1></Bounce>
            
        
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