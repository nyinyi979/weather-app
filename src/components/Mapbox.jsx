import mapboxgl from "mapbox-gl";
import '../dist/output.css';
import { useEffect, useRef } from "react";

//Mapbox api 
export default function Map(props){
    mapboxgl.accessToken = "pk.eyJ1IjoibnlpbnlpLTciLCJhIjoiY2xscmt2ajloMHFtMjNrdGhwMjR4aWl3NyJ9.54yYIBM_beGXdQRsi4grVg";
    var lng = props.lng;
    var lat = props.lat;
    const mapbox = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    useEffect(() => {
        if (!mapboxgl.supported()) {
            alert('Your browser does not support Mapbox GL');
        } 
        else {
            map.current = new mapboxgl.Map({
                container: mapbox.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center : [lng , lat], 
                zoom : 14
            });
        }
        
         
        marker.current = new mapboxgl.Marker({
            color : "#23452" , 
            draggable : true
        }).setLngLat([lng,lat])
        .setPopup(new mapboxgl.Popup().setHTML("<span>Is this your location?</span>"))
        .addTo(map.current)
    },[lng , lat]);
    return (
        <>
            <div className="md:h-96 md:mt-0 md:mb-0 h-56 mt-8 mb-6 rounded-md min-h-62 max-h-fit" style={{width:'100%',maxWidth:'100%',minWidth:'100%'}} ref={mapbox}></div>
        </>
    )
}