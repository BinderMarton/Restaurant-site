import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import './Contact.css';



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
            <div className="contact-container">
                <div className="contact-data">
                    <div className="data-item">
                        <h2><i className="fas fa-map-marker-alt"></i></h2>
                        <p>1146 Budapest <br /> Wesselényi utca 123.</p>
                    </div>
                    <div className="data-item">
                        <h2><i className="fas fa-envelope"></i></h2>
                        <p>Vakvarju@Vakvarju.com</p>
                    </div>
                    <div className="data-item">
                        <h2><i className="fas fa-phone"></i></h2>
                        <p>06-23-456-234</p>
                    </div>
                    <div className="data-item">
                        <h2><i className="fas fa-clock"></i></h2>
                        <p>H-P: 9:00 - 22:00 <br />Szo: 9:00 - 0:00 <br /> V: 9:00 - 21:00 </p>
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
        );
    }
}
export default Contact