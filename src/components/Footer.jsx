import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="flags-box">
            <button className="flag-btn"><img src={require('../img/hungary-flag.png')} alt="Hun-flag" className="flag-pic" /></button>
            <button className="flag-btn"><img src={require('../img/english-flag.png')} alt="Eng-flag" className="flag-pic" /></button>
        </div>
    );
}

export default Footer;