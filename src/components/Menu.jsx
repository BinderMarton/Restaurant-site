import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { SideData } from "./Languages"


class Menu extends Component {



    

    render() {
        return (
            <div className="width-container">
                <div className="menu">
                    <div className="category">
                        <div className="category-element">
                            <NavLink to="/levesek"><img src={require('../img/soup.png')} alt="soup-pic" className="soup" /></NavLink>
                            <NavLink to="/levesek"><button className="element-name">{SideData[this.props.language].Menu.text1}</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/foetelek"><img src={require('../img/main_course.png')} alt="main-pic" className="main-course" /></NavLink>
                            <NavLink to="/foetelek"><button className="element-name">{SideData[this.props.language].Menu.text2}</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/koretek"><img src={require('../img/sidedish.png')} alt="sidedish-pic" className="sidedish" /></NavLink>
                            <NavLink to="/koretek"><button className="element-name">{SideData[this.props.language].Menu.text3}</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/pizzak"><img src={require('../img/pizza.png')} alt="pizza-pic" className="pizza" /></NavLink>
                            <NavLink to="/pizzak"><button className="element-name">{SideData[this.props.language].Menu.text4}</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/desszertek"><img src={require('../img/dessert.png')} alt="dessert-pic" className="dessert" /></NavLink>
                            <NavLink to="/desszertek"><button className="element-name">{SideData[this.props.language].Menu.text5}</button></NavLink>
                        </div>
                        <div className="category-element">
                            <NavLink to="/eloetelek"><img src={require('../img/appetizer.png')} alt="appetizer-pic" className="appetizer" /></NavLink>
                            <NavLink to="/eloetelek"><button className="element-name">{SideData[this.props.language].Menu.text6}</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;