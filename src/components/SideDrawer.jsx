import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { SideData } from "./Languages"

const SideDrawer = (props) => {
    return (
        <nav className="side-drawer">
            <NavLink onClick={props.click} className="sidebar-menu" to="/">{SideData[props.language].Navbar.home}</NavLink>
            <NavLink onClick={props.click} className="sidebar-menu" to="/bemutatkozas">{SideData[props.language].Navbar.about}</NavLink>
            <NavLink onClick={props.click} className="sidebar-menu" to="/elerhetoseg">{SideData[props.language].Navbar.contact}</NavLink>
            <NavLink onClick={props.click} className="sidebar-menu" to="/galeria">{SideData[props.language].Navbar.gallery}</NavLink>
            <NavLink onClick={props.click} className="sidebar-menu" to="/etlap">{SideData[props.language].Navbar.menu}</NavLink>
        </nav>
    );
}

export default SideDrawer;