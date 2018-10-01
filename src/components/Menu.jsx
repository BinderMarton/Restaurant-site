import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { Animated } from "react-animated-css";


class Menu extends Component {
    render() {
        return (
            <div className="width-container">
                <div className="menu">
                    <div className="category">
                        <div className="category-element">
                        <Animated animationIn="bounceInLeft" isVisible={true}><NavLink to="/levesek"><img src={require('../img/soup.png')} alt="soup-pic" className="soup" /></NavLink></Animated>
                            <NavLink to="/levesek"><button className="element-name">Levesek</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/foetelek"><img src={require('../img/main_course.png')} alt="main-pic" className="main-course" /></NavLink>
                            <NavLink to="/foetelek"><button className="element-name">Főételek</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/koretek"><img src={require('../img/sidedish.png')} alt="sidedish-pic" className="sidedish" /></NavLink>
                            <NavLink to="/koretek"><button className="element-name">Köretek</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/pizzak"><img src={require('../img/pizza.png')} alt="pizza-pic" className="pizza" /></NavLink>
                            <NavLink to="/pizzak"><button className="element-name">Pizzák</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/desszertek"><img src={require('../img/dessert.png')} alt="dessert-pic" className="dessert" /></NavLink>
                            <NavLink to="/desszertek"><button className="element-name">Desszertek</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/eloetelek"><img src={require('../img/appetizer.png')} alt="appetizer-pic" className="appetizer" /></NavLink>
                            <NavLink to="/eloetelek"><button className="element-name">Előételek</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;