import React from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const Gmap = ({coord}) => {

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            coord: coord
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'Position mark from the coordinates'}
        />
        </Map>
      </div>
    );

}

export default GoogleApiWrapper({
  apiKey: 'API_KEY'
})(Gmap);