import mapboxgl from "mapbox-gl";
import '../dist/output.css';
import { useEffect, useRef } from "react";

let sample_marker = new mapboxgl.Marker().setLngLat([50 , -19])
//Marker position 
export function get_marker(){
    return [sample_marker.getLngLat().lng , sample_marker.getLngLat().lat];
}
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
            map = new mapboxgl.Map({
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
        sample_marker = marker.current;
        marker.current.on('drag' ,()=>{
            get_marker();
        })
    },[lng , lat]);
    return (
        <>
        <div className="relative md:h-96 md:mt-0 md:mb-0 mt-8 mb-6 bg-black h-64 max-h-full min-h-fit rounded-md ">
            <div style={{width:'100%',height:"100%",position:'absolute',top:0,left:0}} ref={mapbox}></div>
        </div>
        </>
    )
}