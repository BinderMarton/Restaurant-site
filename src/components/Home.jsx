import React, { Component } from 'react';
import './Home.css';
import Footer from './Footer';
import './Footer.css';
import { Animated } from "react-animated-css";






class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <Animated animationIn="bounceInLeft" isVisible={true}><h1 className="restaurant-name">Vakvarjú Étterem</h1> </Animated>
                    <Animated animationIn="bounceInRight" isVisible={true}><p className="name2">"Nekünk a vevő az első"</p></Animated>
                    <Animated className="separator" animationIn="bounceInUp" isVisible={true}></Animated>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;