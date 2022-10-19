import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return(
        <nav id="main-navigation" aria-label="Main navigation">
            <ul className="menu">
                <li>
                    <NavLink className="menulink" to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink className="menulink" to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className="menulink" to="/Exams">Exams</NavLink>
                </li>
                <li>
                    <NavLink className="menulink" to="/ContactUs">Contact Us</NavLink>
                </li>
            </ul>
            <i className="fa-solid fa-bars menubars"></i>
        </nav>
        
    )
}
export default Nav;