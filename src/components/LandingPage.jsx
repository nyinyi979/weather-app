import { useRef, useState } from 'react';
import '../dist/output.css';
import bg from '../images/bg.webp';
import Map from './Mapbox';
import getLocation from './getLocation';
import getWeather from './getWeather';
import SecondPage from "./WeatherPage";
let SecondPage_ = ( <SecondPage /> );
export default function FirstPage() {

    //State for determining location set and changing the map
    const [location , setLocation] = useState(false);

    //For longitude and latitude value, can use normal variables ( If i rethink it:) )
    const [lngV , setLngV] = useState(-87.661557);
    const [latV , setLatV] = useState(41.893748);

    //Messages under the main heading , not just for errors 
    const [error , setError] = useState("Allow location access!");

    //Check if the weather data is obtained
    const [weather , setWeather ] = useState(false);
    const location_btn = useRef(null);

    //First react component to show with the mapbox
    let FirstPage_ = (
            <div data-theme="retro" className="card container xl:max-w-fit md:max-w-2xl lg:max-w-3xl w-fit max-w-sm max-h-fit animate-fade shadow-md shadow-gray-500 mx-auto my-7 image-full">
                <figure><img src={bg} className="w-full object-cover opacity-50" alt="bg" /></figure>
                <div className="card-body">
                    <h2 className='card-title animate-fade_slow text-2xl hover:text-base-200 cursor-default'>Hello , would you love to see your weather?</h2>
                    <p className='w-full animate-fade_slow text-content-100 opacity-80 h-5 mb-0 hover:text-base-100 cursor-default'><span className='text-warning'>{error}</span></p>
                    <Map lng={lngV} lat={latV}/>
                    <div className="card-actions justify-center">
                        <Btn location={location}/>
                        
                    </div>
                </div>
            </div>
    );
    let data = "";
    //Button generation 
    //Didn't move as module because for easier implementation with react hooks 
    //First button is to get location
    //Second button is to get weather data and render
    function Btn(props){
        if(!props.location) {
            return (
                <button ref={location_btn} onClick={()=>{
                    getLocation((err , data_)=>{
                            if(err) {
                                setError(err);
                                setTimeout(()=>{
                                    window.location.reload();
                                }, 7000)
                                return;
                            }
                            if(data_[0]) setLngV(data_[0]);
                            if(data_[1]) setLatV(data_[1]);
                            setError("After allowing location access, please reload ! You can then click 'Get Weather'")
                            setLocation(true);                                         
                    })
                }} className="btn btn-danger max-w-full">Get your location!</button>
            )
        }
        else {
            return (
                <button onClick={async()=>{
                    return new Promise ((resolve , reject)=>{
                        data = getWeather(); 
                        resolve(data);
                    }).then((result)=>{
                        SecondPage_= ( <SecondPage obj={result}/>);
                    }).then(()=>{
                        setWeather(true);
                    })
                }} className="btn btn-danger max-w-full">Get weather!</button>
            )
        }
    }
    return (
        <>
            {!weather ? FirstPage_ : SecondPage_}
        </>
    )
}