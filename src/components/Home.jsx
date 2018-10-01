import React, { Component } from 'react';
import './Home.css';
import Footer from './Footer';
import './Footer.css';
import { Animated } from "react-animated-css";
import {SideData} from "./Languages"






class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <Animated animationIn="bounceInLeft" isVisible={true}><h1 className="restaurant-name">{SideData[this.props.language].Home.name}</h1> </Animated>
                    <Animated animationIn="bounceInRight" isVisible={true}><p className="name2">{SideData[this.props.language].Home.text2}</p></Animated>
                    <Animated className="separator" animationIn="bounceInUp" isVisible={true}></Animated>
                </div>
                <Footer changeLanguage={this.props.changeLanguage}/>
            </div>
        );
    }
}

export default Home;