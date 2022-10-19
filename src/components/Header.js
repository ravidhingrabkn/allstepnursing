import React from "react";
// import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import allstepnursinglogo from '../allstepnursinglogo1.png';
// import mylogo from '../mylogo.png';
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm mynav ">
                <a className="navbar-brand navimage" href="#">
                    <img className="logoimage" src={allstepnursinglogo} alt='logo' />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav navbaritems">

                        <li className="nav-item ">
                            <NavLink className="nav-link text-white" to="/" >Home</NavLink>
                        </li>

                        <li className="nav-item ">
                            <NavLink className="nav-link text-white" to="/About">About</NavLink>
                        </li>


                        <li className="nav-item dropdown  ">
                            {/* <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Dropdown link
                            </a> */}
                            <NavLink className="nav-link dropdown-toggle text-white" id="navbardrop" data-toggle="dropdown" to="/nnas">Services</NavLink>
                            <div className="dropdown-menu">
                                {/* <a className="dropdown-item" href="#">Link 1</a> */}
                                <NavLink className="dropdown-item" to="/nnas">NNAS</NavLink>
                                {/* <a className="dropdown-item" href="#">Link 2</a> */}
                                <NavLink className="dropdown-item" to="/celban">CELBAN</NavLink>
                                {/* <a className="dropdown-item" href="#">Link 3</a> */}
                                <NavLink className="dropdown-item" to="/cpnre">CPNRE/REX-PN</NavLink>
                                <NavLink className="dropdown-item" to="/nclex">NCLEX-RN</NavLink>
                                <NavLink className="dropdown-item" to="/interview">INTERVIEW Q&A</NavLink>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link contact text-white" to="/Contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;