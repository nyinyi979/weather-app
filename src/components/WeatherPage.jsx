import { useEffect, useState } from 'react';
import '../dist/output.css';
import GetData from './getData';
let Fetched = "";
let gridClass = "xl:grid-cols-5 xl:grid-rows-1 xl:my-8 xl:h-full xl:max-w-fit xl:gap-3 lg:max-w-3xl md:grid-rows-3 md:grid-cols-2 md:max-w-2xl md:w-full w-3/4 grid grid-rows-5 gap-4 grid-cols-1 h-fit max-w-screen-sm animate-fade mx-auto py-5 my-3";
let HClass = "text-center font-extrabold my-4 text-2xl text-base-content";
// let Object = [{long_description : "Clear sky"} ,{long_description : "Few clouds"} ,{long_description : "Scattered clouds"} ,{long_description : "Very cloudy"} ,{long_description : "Few rain"} ];
let Object = [{long_description : "Few rain"} , {long_description : "Heavy rain"} ,{long_description : "Thunderstorm"} ,{long_description : "Snow"} , {long_description : "Mist"} ];
let UnFetched = (
    <>
        <h1 className={HClass}>City/Country</h1>
        <div className={`${gridClass} `}>
            {Object.map((ele , index) => <GetData description={ele.long_description} i={index} key={index} />)}
        </div>
    </>
);
//Second page , all the componenents are separated make it look good!
export default function SecondPage(prop){
    const [done , setDone] = useState(false);
    useEffect(()=>{
        let data = [];
        new Promise((resolve , reject)=>{       
            data.length = 0;
            for(var i = 0; i<5; i++){
                data.push(prop.obj[i]);
            }
            setTimeout(()=>{ 
                resolve(data);
            }, 4500)
        }).then((data_)=>{     
            if(data_){
                Fetched = (
                    <>
                    <h1 className={HClass}>{data_[0].country}</h1>
                    <div className={` ${gridClass} `}>
                        {data_.map((ele , index) => <GetData temp={ele.temp}
                        description={ele.long_description} day={ele.day} date={ele.date}
                        max={ele.max_temp} min={ele.min_temp} wind={ele.wind} cloud={ele.cloud} humidity={ele.humidity}
                         i={index} key={index} />)}
                    </div>
                    </>
                )
            }
        }).then(()=>{
            setDone(true);
        })
    }, [prop.obj]);

    return (
        <>
           {!done ? UnFetched : Fetched }
        </>
    )
    
}