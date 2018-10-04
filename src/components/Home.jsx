import React, { Component } from 'react';
import './Home.css';
import Footer from './Footer';
import './Footer.css';
import {SideData} from "./Languages"






class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="home-container">
                   <h1 className="restaurant-name">{SideData[this.props.language].Home.name}</h1>
                   <p className="name2">{SideData[this.props.language].Home.text2}</p>
                    <div className="separator"></div>
                </div>
                <Footer changeLanguage={this.props.changeLanguage}/>
            </div>
        );
    }
}

export default Home;