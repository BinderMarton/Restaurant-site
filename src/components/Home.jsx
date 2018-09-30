import React, { Component } from 'react';
import './Home.css';




class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-container">
                    <h1 className="restaurant-name">Vakvarjú Étterem</h1>
                    <p className="name2">"Nekünk a vevő az első"</p>
                    <div className="separator"></div>
                </div>
            </div>
        );
    }
}

export default Home;