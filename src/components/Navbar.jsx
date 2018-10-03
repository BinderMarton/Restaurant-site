import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { SideData } from "./Languages"



const Navbar = (props) => {
    return (
        <div className="navbar-bck">
            <div className="width-container">
                <div className="navbar">
                    <h1 className="logo-name"><NavLink className="logo-page" to="/">Vakvarjú</NavLink></h1>
                    <div className="hamburger-menu">
                        <div className="navbar-box">
                            <NavLink className="navbar-menu logo-pic" to="/">{SideData[props.language].Navbar.home}</NavLink>
                            <NavLink className="navbar-menu" to="/bemutatkozas">{SideData[props.language].Navbar.about}</NavLink>
                            <NavLink className="navbar-menu" to="/elerhetoseg">{SideData[props.language].Navbar.contact}</NavLink>
                            <NavLink className="navbar-menu" to="/galeria">{SideData[props.language].Navbar.gallery}</NavLink>
                            <NavLink className="navbar-menu" to="/etlap">{SideData[props.language].Navbar.menu}</NavLink>
                        </div>
                        <div className="hamburger-icon">
                            <button onClick={props.drawerClickHandle} className="hamburger-btn"><i className="fas fa-bars"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;