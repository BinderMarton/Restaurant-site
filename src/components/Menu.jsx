import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';


class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="category">
                    <div className="category-element">
                        <img src={require('../img/soup.png')} alt="soup-pic" className="soup" />
                        <NavLink to="/levesek"><button className="element-name">Levesek</button></NavLink>
                    </div>
                    <div className="category-element">
                        <img src={require('../img/main_course.png')} alt="main-pic" className="main-course" />
                        <NavLink to="/foetelek"><button className="element-name">Főételek</button></NavLink>
                    </div>
                    <div className="category-element">
                        <img src={require('../img/sidedish.png')} alt="sidedish-pic" className="sidedish" />
                        <NavLink to="/koretek"><button className="element-name">Köretek</button></NavLink>
                    </div>
                    <div className="category-element">
                        <img src={require('../img/pizza.png')} alt="pizza-pic" className="pizza" />
                        <NavLink to="/pizzak"><button className="element-name">Pizzák</button></NavLink>
                    </div>
                    <div className="category-element">
                        <img src={require('../img/dessert.png')} alt="dessert-pic" className="dessert" />
                        <NavLink to="/desszertek"><button className="element-name">Desszertek</button></NavLink>
                    </div>
                    <div className="category-element">
                        <img src={require('../img/appetizer.png')} alt="appetizer-pic" className="appetizer" />
                        <NavLink to="/eloetelek"><button className="element-name">Előételek</button></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;