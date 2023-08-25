import mapboxgl from "mapbox-gl";
import '../dist/output.css';
import { useEffect, useRef } from "react";

//Mapbox api 
export default function Map(props){
    mapboxgl.accessToken = "pk.eyJ1IjoibnlpbnlpLTciLCJhIjoiY2xsZmFkamljMG90YTNjcDQxZHZ0cDNkOSJ9.Jd_HOfLe7-xiRZOuqEnwLA";
    var lng = props.lng;
    var lat = props.lat;
    const mapbox = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapbox.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center : [lng , lat], 
            zoom : 14
        });
         
        marker.current = new mapboxgl.Marker({
            color : "#23452" , 
            draggable : true
        }).setLngLat([lng,lat])
        .setPopup(new mapboxgl.Popup().setHTML("<span>Is this your location?</span>"))
        .addTo(map.current)
    },[lng , lat]);
    return (
        <>
            <div className="md:h-96 sm:h-56 max-h-full w-full" ref={mapbox}></div>
        </>
    )
}