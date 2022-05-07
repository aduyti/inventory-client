import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const MapLocation = () => {
    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GoogleMap_API_KEY}>
            <GoogleMap
                mapContainerStyle={{ width: '350px', height: '350px' }}
                center={{
                    lat: 23.7770374,
                    lng: 90.3967948
                }}
                zoom={14}
            >
                <Marker position={{
                    lat: 23.7770374,
                    lng: 90.3967948
                }}
                    cursor="Laptop House" />
            </GoogleMap>

        </LoadScript>
    );
};

export default MapLocation;