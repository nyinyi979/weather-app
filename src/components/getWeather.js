import axios from "axios";
import getExtractedData from "./getTemplateData";

//Fetching data from openweathermap 
export default function getWeather(){
    const api_key = "cbd662cc75ec91bf9f28789abe5144c5";
    const lng = 96.1667;
    const lat = 16.7964;
    let weather_data = [ {} , {} , {} , {} , {} ];
    axios({
        url : `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`,
    }).then((response)=>{
        getData(response.data.list , `${response.data.city.name}/${response.data.city.country}`);
    });
    function getData(data , country){
        for(let i = 0 ; i<weather_data.length; i++){
            var currentDate = new Date();
            //re assigning the template to not cause data duplication!!
            let obj_template = {
                date : "" , 
                day : "" ,
                temp : [] , 
                max_temp : [] , 
                min_temp : [] , 
                wind : [] ,
                cloud : [] ,
                humidity : [] ,
                long_description : [] ,
                country : country
            }
            currentDate.setDate(currentDate.getDate() + i);

            //Month starts from 0 , so it is +1 first , '0' is concatenated from front and the whole string is sliced 
            //two character from behind -> to match with the dt_txt obtained from weather data

            let date_to_assign = `${currentDate.getFullYear()}-${('0' + (currentDate.getMonth() + 1) ).slice(-2)}-${currentDate.getDate()}`;
            const dayNames = ["Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
            obj_template.day = dayNames[currentDate.getDay()];
            obj_template.date = date_to_assign;
            for(let k = 0 ; k<data.length; k++) {
                if(obj_template.date === data[k].dt_txt.split(" ")[0]){
                    obj_template.temp.push(data[k].main.temp);
                    obj_template.max_temp.push(data[k].main.temp_max);
                    obj_template.min_temp.push(data[k].main.temp_min);
                    obj_template.humidity.push(data[k].main.humidity);
                    obj_template.wind.push(data[k].wind.speed);
                    obj_template.cloud.push(data[k].clouds.all);
                    obj_template.long_description.push(data[k].weather[0].description);
                    //avarage calculation 
                }
                else continue;
            }
                getExtractedData(obj_template)
            Object.assign(weather_data[i] , obj_template);
        }
        // g(data[0].dt_txt.split(" ")[0] === obj_[0].date);
    }
    return weather_data;
}