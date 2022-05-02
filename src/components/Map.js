import React, { useState, useEffect } from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import "../css/global.css";
import { Link, useParams } from 'react-router-dom';
import PostData from '../db.json'

const center = {
    lat: 46.221445,
    lng: 24.790747,
};

const Map = ({pointId}) => {

  useEffect(() => {
    console.log(pointId);
  },[])

    const[selectedPoint, setSelectedPoint] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyAPD3DZyeN0FZJN-s2TcJK-bwvj0rOGiJg",
      libraries: ["places"],
    });
  
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    var myStyles =[
      {
          featureType: "poi",
          elementType: "labels",
          stylers: [
                { visibility: "off" }
          ]
      }
  ];

  var myOptions = {
    styles: myStyles
    // zoom: 10,
    // center: homeLatlng,
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
};
  
    return (
      <div className="map-container">
        {/* <Map/> */}
  
        <GoogleMap
          options = {myOptions}
          
          mapContainerClassName='map-element'
          zoom={15}
          center={center}

          // ref={props.onMapLoad}
          // onClick={props.onMapClick}

          // mapId= 'fe46cfda0e5b10c1'
        >

        {PostData.posts.map(point => (
          <Marker key={point.id} position={{
            lat: point.position.lat,
            lng: point.position.long
          }}
          onClick={() => {
            setSelectedPoint(point)
            console.log(point);
          }}
          
          />
        ))}

        { selectedPoint && (
          <InfoWindow
            position={{
              lat: selectedPoint.position.lat,
              lng: selectedPoint.position.long
            }}
            onCloseClick={() => {
              setSelectedPoint(null)
            }}>
              <div className='infoW'>
                <div className='infoWTitle'>{selectedPoint.title}</div>
                {/* <img src='https://i0.wp.com/romaniawow.com/wp-content/uploads/2021/04/turnul_cu_ceas_Sighisoara-scaled.jpg?ssl=1'/> */}
                <Link className='infoWLink' to={"/explore/place/" + selectedPoint.id}><p>mai multe</p></Link>
              </div>
          </InfoWindow>
        )}

        </ GoogleMap>
      </div>
    );
}

export default Map