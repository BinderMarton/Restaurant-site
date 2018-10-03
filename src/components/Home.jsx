import React, { Component } from 'react';
import './Home.css';
import Footer from './Footer';
import './Footer.css';
import { Animated } from "react-animated-css";
import {SideData} from "./Languages"






class Home extends Component {
    state = {
        pageHelp: true
    }

    componentDidMount() {
        this.setState({ pageHelp: false })
    }

    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <Animated animationIn="bounceInLeft" isVisible={this.state.pageHelp}><h1 className="restaurant-name">{SideData[this.props.language].Home.name}</h1> </Animated>
                    <Animated animationIn="bounceInRight" isVisible={this.state.pageHelp}><p className="name2">{SideData[this.props.language].Home.text2}</p></Animated>
                    <Animated className="separator" animationIn="bounceInUp" isVisible={this.state.pageHelp}></Animated>
                </div>
                <Footer changeLanguage={this.props.changeLanguage}/>
            </div>
        );
    }
}

export default Home;