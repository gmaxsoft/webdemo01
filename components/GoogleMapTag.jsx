"use client"

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Marker from './Marker';

const containerStyle = {
  width: '1296px',
  height: '600px'
};

const center = {
  lat: 52.24834044802785,
  lng: 15.533964835708657
};

function GoogleMapTag() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
   
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      <Marker lat={center.lat} lng={center.lng} />
      <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapTag)