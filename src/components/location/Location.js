import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './location.less';

class Location extends Component {

    state = {
        lat: 46.4825,
        lng: 30.7233,
        zoom: 10
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className='map-wrapper'>
                <Map center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default Location;