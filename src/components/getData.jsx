//EACH CARD DATA IS OBTAINED FROM HERE

import {IoSunnyOutline , IoWaterOutline} from 'react-icons/io5';
import {RiWindyLine} from 'react-icons/ri';
import {AiOutlineArrowDown , AiOutlineArrowUp , AiOutlineCloud} from 'react-icons/ai';
import randomText from './randomzie';
import getIcon from './getIcon';
export default function GetData(props){
    let color = "";
    let txt = undefined;
    let Icon = "";

    //Tailwind css are written in a variable to reduce code replication! Still looks pretty awful    
    let headingClass = "text-xl font-bold text-center mb-2 transition-all duration-700"; 
    let iconClass = "hover:animate-fade_half inline text-4xl mr-3";
    let smallIconClass = "inline text-lg ml-1";
    let gridChildClass = "xl:w-full md:w-80 md:w-full hover:scale-105 h-fit p-4 w-72 text-left w-full col-span-1 shadow-md rounded-md bg-gradient-to-br transition-all duration-300 cursor-default";
    let gridLastChildClass = "xl:w-full xl:col-span-1 md:w-80 md:col-span-2 md:w-full hover:scale-105 w-full h-fit p-4 text-left col-span-1 shadow-md rounded-md bg-gradient-to-br transition-all duration-300 cursor-default";
    let dayClass = "pt-3 mb-3 text-left border-t-2 text-lg border-amber-50"
    let dateClass = "transition-all duration-700 float-right";
    let largeTextClass = "transition-all duration-700 lg:text-5xl p-2 text-4xl text-center font-bold";
    let tableClass = "table table-md bg-gradient-to-tr my-4 mr-0";
    let tableRowClass = "hover:scale-110 hover:bg-opacity-70 transition-all duration-200";
    let tableDataClass = "pl-0 pr-6";
    let smallTextClass = "my-4 text-sm hover:text-md";

    //This is for each color plateletes! 
    switch(props.description){
        case 'Clear sky' : 
            color = ["from-amber-300 to-orange-500" , "shadow-amber-400" , "text-orange-900" , "hover:bg-amber-700" , "hover:text-orange-100" ];
            txt = randomText("Sunny");
            break;
        case 'Few clouds' : 
            color = ["from-amber-200 to-amber-500" , "shadow-amber-400" , "text-amber-900" , "hover:bg-amber-500" , "hover:text-amber-100"];
            txt = randomText("Cloudy");
            break;
        case 'Scattered clouds' : 
            color = ["from-slate-200 to-slate-400" ,  "shadow-slate-400" , "text-slate-900" , "hover:bg-slate-400" , "hover:text-slate-100"];
            txt = randomText("Cloudy");
            break;
        case 'Very cloudy' : 
            color = ["from-gray-400 to-gray-700" , "shadow-gray-700" , "text-gray-100" , "hover:bg-gray-100" , "hover:text-gray-900"];
            txt = randomText("Cloudy");
            break;
        case 'Few rain' : 
            color = ["from-cyan-100 to-cyan-400" , " shadow-cyan-400" , "text-cyan-900" , "hover:bg-cyan-500" , "hover:text-cyan-50"];
            txt = randomText("Rain");
            break;
        case 'Heavy rain' : 
            color = ["from-cyan-400 to-cyan-700" , "shadow-cyan-700" , "text-cyan-950" , "hover:bg-cyan-700" , "hover:text-cyan-100"];
            txt = randomText("Rain");
            break;
        case 'Thunderstorm' : 
            color = ["from-cyan-700 to-cyan-900" , "shadow-cyan-900" , "text-cyan-100" , "hover:bg-cyan-100" , "hover:text-cyan-950"];
            txt = randomText("Thunder");
            break;
        case 'Snow' : 
            color = ["from-zinc-200 to-zinc-400" , "shadow-zinc-400" , "text-zinc-900" , "hover:bg-zinc-500" , "hover:text-zinc-100"];
            txt = randomText("Snow");
            break;
        case 'Mist' : 
            color = ["from-stone-300 to-stone-500" , "shadow-stone-500" , "text-stone-900" , "hover:bg-stone-500" , "hover:text-stone-100"];
            txt = randomText("Mist");
            break;
        default :
    }
        //Getting the icon for each weather type
        Icon = getIcon(props.description);
    
        //Intro animation class assigning according index 
        switch(props.i){
            case 0:
                gridChildClass += ' animate-slide_in_1';
                break;
            case 1: 
                gridChildClass += ' animate-slide_in_2';
                break;
            case 2:
                gridChildClass += ' animate-slide_in_3';
                break;
            case 3:
                gridChildClass += ' animate-slide_in_4';
                break;
            case 4:
                gridLastChildClass += ' animate-slide_in_5';
                break;
            default:
        }

        //Last item scaling for medium screen 
        if(props.i === 4){
            gridChildClass = gridLastChildClass;
        }

        //Assigning each color values 
        headingClass += ` ${color[4]}`;
        dateClass += ` ${color[4]}`;
        largeTextClass += ` ${color[4]}`;
        gridChildClass += ` ${color[0]} ${color[1]} ${color[2]}`;
        iconClass += ` ${color[2]}`;
        tableClass += ` ${color[0]}`;
        tableRowClass += ` ${color[3]} ${color[4]}`;

        //returning each grid items, it is pretty easy to understand :> if you do it from scrap:(
        return (
            <div className={gridChildClass}>
                <p className={headingClass}>{Icon ? Icon:<IoSunnyOutline className={iconClass}/> }{props.description ? props.description : "Sample"} </p>
                <p className={dayClass}>{props.day ? props.day : "...day"}<span className={dateClass}>{props.date ? props.date : `../../${new Date().getFullYear()}`}</span></p>
                <p className={largeTextClass}>{props.temp ? props.temp : ".."} &deg; C</p>
                    <table className={tableClass}>
                        <thead></thead>
                        <tbody>
                            <tr className={tableRowClass}><td>Highest temp  <AiOutlineArrowUp className={smallIconClass}/></td><td className={tableDataClass}> : {props.max ? props.max : ".."} &deg; C</td></tr>
                            <tr className={tableRowClass}><td>Lowest temp   <AiOutlineArrowDown className={smallIconClass}/></td><td className={tableDataClass}> : {props.min ? props.min : ".."} &deg; C</td></tr>
                            <tr className={tableRowClass}><td>Humidity      <IoWaterOutline className={smallIconClass}/></td><td className={tableDataClass}> : {props.humidity ? props.humidity : ".."} %</td></tr>
                            <tr className={tableRowClass}><td>Wind speed    <RiWindyLine className={smallIconClass}/></td><td className={tableDataClass}> : {props.wind ? props.wind : ".."} m/s</td></tr>
                            <tr className={tableRowClass}><td>Cloudiness    <AiOutlineCloud className={smallIconClass}/></td><td className={tableDataClass}> : {props.cloud ? props.cloud : ".."} %</td></tr>
                        </tbody>
                        <tfoot></tfoot>
                        </table>              
                    <p className={smallTextClass}>{!txt ? "I don't know what to say!" : txt}</p> 
            </div>     
        )
}