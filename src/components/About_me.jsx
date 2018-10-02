import React, { Component } from 'react';
import './About_me.css';
import { Animated } from "react-animated-css";
import { SideData } from "./Languages"

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-box">
                <div className="width-container">
                    <div className="about-me">
                        <div className="about-header">
                            <Animated animationIn="fadeInLeft" isVisible={true}><img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Pic" className="about-pic" /></Animated>
                            <Animated animationIn="fadeInRight" isVisible={true}><div className="about-text">
                                    <h2 className="about-title">{SideData[this.props.language].AboutUs.title}</h2>
                                    <p className="about-text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                         </p>
                            </div></Animated>
                        </div>
                    </div>
                </div>
                <Animated animationIn="fadeInUp" isVisible={true}><div className="about-hero">
                    <div className="width-container">
                        <h2 className="hero-title">{SideData[this.props.language].AboutUs.pictureTitle}</h2>
                        <p className="hero-text">{SideData[this.props.language].AboutUs.pictureText2}</p>
                    </div>
                </div></Animated>
                <div className="width-container">
                    <div className="about-text2">
                        <h1>{SideData[this.props.language].AboutUs.text3}</h1>
                        <div className="offers">
                            <div className="offer-item">
                                <i className="fas fa-utensils"></i>
                                <h2 className="offer-name">{SideData[this.props.language].AboutUs.text3Title1}</h2>
                                <p className="offer-text">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise
                                design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements
                    of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical </p>
                            </div>
                            <div className="offer-item">
                                <i className="fas fa-wine-glass"></i>
                                <h2 className="offer-name">{SideData[this.props.language].AboutUs.text3Title2}</h2>
                                <p className="offer-text">Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise
                                design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements
                    of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;