import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import './Contact.css';
import {SideData} from "./Languages"
import { Animated } from "react-animated-css";


class Contact extends Component {
    constructor() {
        super()
        this.state = {
            lat: 47.4999173,
            lng: 19.06773659999999,
            zoom: 16
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="width-container">
                <div className="contact-container">
               <div className="contact-data">
                        <div className="data-item">
                        <Animated animationIn="bounceInLeft" isVisible={true}><h2><i className="fas fa-map-marker-alt"></i></h2></Animated>
                        <Animated animationIn="bounceInRight" isVisible={true}><p>{SideData[this.props.language].Contact.info1} <br /> {SideData[this.props.language].Contact.info2}</p></Animated>
                        </div>
                        <div className="data-item">
                        <Animated animationIn="bounceInLeft" isVisible={true}><h2><i className="fas fa-envelope"></i></h2></Animated>
                        <Animated animationIn="bounceInRight" isVisible={true}><p>{SideData[this.props.language].Contact.info3}</p></Animated>
                        </div>
                        <div className="data-item">
                        <Animated animationIn="bounceInLeft" isVisible={true}><h2><i className="fas fa-phone"></i></h2></Animated>
                        <Animated animationIn="bounceInRight" isVisible={true}><p>{SideData[this.props.language].Contact.info4}</p></Animated>
                        </div>
                        <div className="data-item">
                        <Animated animationIn="bounceInLeft" isVisible={true}><h2><i className="fas fa-clock"></i></h2></Animated>
                        <Animated animationIn="bounceInRight" isVisible={true}><p>{SideData[this.props.language].Contact.info5} <br />{SideData[this.props.language].Contact.info6} <br /> {SideData[this.props.language].Contact.info7} </p></Animated>
                        </div>
                    </div>
                    <div id="container">
                        <LeafletMap center={position} zoom={this.state.zoom}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                            />
                            <Marker position={position}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                            </Marker>
                        </LeafletMap>
                    </div>
                </div>
            </div>

        );
    }
}
export default Contact