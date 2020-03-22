import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unidades: [],
            rutas: [],
            idRuta: '0',

            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},

            timer: null,
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
        this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    }

    onMarkerClick(props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onMapClicked(props){
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    onInfoWindowClose(){

    }

    render() {
        return (
            <div className="main row justify-content-center mt-3">
                <div className="col-10" style={{height: "600px"}}>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        initialCenter={{
                            lat: -16.441084,
                            lng: -71.529211,
                        }}
                    >
                        {/*
                            this.state.unidades.map((elemento, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        onClick={this.onMarkerClick}
                                        title={'The marker`s title will appear as a tooltip.'}
                                        name={elemento.descripcion}
                                        position={{lat: elemento.lat, lng: elemento.lng}}
                                        icon={{
                                            url: "/favicon.ico",
                                            anchor: new google.maps.Point(32,32),
                                            scaledSize: new google.maps.Size(32,32)
                                        }}
                                    />
                                );
                            })*/
                        }

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDuXDID0Yxm6vW2TNZs6IftRLsYGJ_NWiQ")
})(MapaComponent);