import React, { Component } from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';
import { Animated } from "react-animated-css";
import {SideData} from "./Languages"


class Menu extends Component {
    render() {
        return (
            <div className="width-container">
                <div className="menu">
                    <div className="category">
                        <div className="category-element">
                        <Animated animationIn="bounceInLeft" isVisible={true}><NavLink to="/levesek"><img src={require('../img/soup.png')} alt="soup-pic" className="soup" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/levesek"><button className="element-name">{SideData[this.props.language].Menu.text1}</button></NavLink></Animated>
                        </div>
                        <div className="category-element">
                        <Animated animationIn="bounceInDown" isVisible={true}><NavLink to="/foetelek"><img src={require('../img/main_course.png')} alt="main-pic" className="main-course" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/foetelek"><button className="element-name">{SideData[this.props.language].Menu.text2}</button></NavLink></Animated>
                        </div>
                        <div className="category-element">
                        <Animated animationIn="bounceInRight" isVisible={true}><NavLink to="/koretek"><img src={require('../img/sidedish.png')} alt="sidedish-pic" className="sidedish" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/koretek"><button className="element-name">{SideData[this.props.language].Menu.text3}</button></NavLink></Animated>
                        </div>
                        <div className="category-element">
                        <Animated animationIn="bounceInLeft" isVisible={true}><NavLink to="/pizzak"><img src={require('../img/pizza.png')} alt="pizza-pic" className="pizza" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/pizzak"><button className="element-name">{SideData[this.props.language].Menu.text4}</button></NavLink></Animated>
                        </div>
                        <div className="category-element">
                        <Animated animationIn="bounceInUp" isVisible={true}><NavLink to="/desszertek"><img src={require('../img/dessert.png')} alt="dessert-pic" className="dessert" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/desszertek"><button className="element-name">{SideData[this.props.language].Menu.text5}</button></NavLink></Animated>
                        </div>
                        <div className="category-element">
                        <Animated animationIn="bounceInRight" isVisible={true}><NavLink to="/eloetelek"><img src={require('../img/appetizer.png')} alt="appetizer-pic" className="appetizer" /></NavLink></Animated>
                        <Animated animationIn="rubberBand" isVisible={true}><NavLink to="/eloetelek"><button className="element-name">{SideData[this.props.language].Menu.text6}</button></NavLink></Animated>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Menu;