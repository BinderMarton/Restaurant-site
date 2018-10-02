import React from 'react';
import './Menu_Category.css';
import { NavLink } from 'react-router-dom';
import { SideData } from "./Languages"
import { Animated } from "react-animated-css";

const Soup = (props) => {
    return (
        <div className="width-container">
            <div className="all-food">
                <div className="backpage">
                    <NavLink to="/etlap"><button className="bckpage-btn"><i className="left-back fas fa-arrow-left"></i></button></NavLink>
                </div>
                <div className="food-title">
                    <h1 className="soup">{SideData[props.language].Soup.title}</h1>
                    <div className="separator-food"></div>
                </div>
                <div className="food-items">
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                    <div className="food-item">
                        <div className="food-quality">
                            <Animated animationIn="bounceInLeft" isVisible={true}><h2 className="food-name">{SideData[props.language].Soup.food1}</h2></Animated>
                            <Animated animationIn="bounceInLeft" isVisible={true}><p className="food-description">{SideData[props.language].Soup.food1Info}</p></Animated>
                            <div className="separator-food2"></div>
                        </div>
                        <Animated animationIn="bounceInRight" isVisible={true}><h2 className="food-price">800 Ft</h2></Animated>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Soup;