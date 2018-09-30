import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
    return (
        <div className="navbar-bck">
            <div className="width-container">
                <div className="navbar">
                    <h1 className="logo-name">Vakvarjú</h1>
                    <NavLink className="navbar-menu logo-pic" to="/">KEZDŐLAP</NavLink>
                    <NavLink className="navbar-menu" to="/bemutatkozas">BEMUTATKOZÁS</NavLink>
                    <NavLink className="navbar-menu" to="/elerhetoseg">ELÉRHETŐSÉG</NavLink>
                    <NavLink className="navbar-menu" to="/galeria">GALÉRIA</NavLink>
                    <NavLink className="navbar-menu" to="/etlap">ÉTLAP</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;