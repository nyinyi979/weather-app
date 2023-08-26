//All the icons are imported here 
import {IoSunnyOutline , IoPartlySunnyOutline , IoCloudyNight } from 'react-icons/io5';
import {RiMoonCloudyFill , RiMistLine , RiMistFill} from 'react-icons/ri';
import {BsFillMoonStarsFill , BsFillCloudMoonFill , BsCloudy , BsCloudRainHeavy , BsCloudRainHeavyFill , BsCloudRain , BsCloudLightningRain , BsCloudLightningRainFill , BsCloudSnow , BsCloudSnowFill} from 'react-icons/bs';
import {FaCloudMoonRain} from 'react-icons/fa';
import {LuCloudy} from 'react-icons/lu';
//Checking the icons with description
export default function getIcon(description){
    let iconClass = "hover:animate-fade_half inline text-4xl mr-3";
    var icon;

    //day_night value for two different icons for day and night
    let day_night = true;
    let time = new Date().getHours();
    if(time > 18 || time < 6) {
        day_night = false;
    }
    
    switch (description){
        case 'Clear sky' :
            day_night ? icon = <IoSunnyOutline className={iconClass}/> : icon = <BsFillMoonStarsFill className={iconClass}/>
            break;
        case 'Few clouds' :
            day_night ? icon = <IoPartlySunnyOutline className={iconClass} /> : icon = <BsFillCloudMoonFill className={iconClass} />
            break;
        case 'Scattered clouds' :
            day_night ? icon = <BsCloudy className={iconClass} /> : icon = <IoCloudyNight className={iconClass} />
            break;
        case 'Very cloudy' :
            day_night ? icon = <LuCloudy className={iconClass} /> : icon = <RiMoonCloudyFill className={iconClass} />
            break;
        case 'Few rain' :
            day_night ? icon = <BsCloudRain className={iconClass} /> : icon = <FaCloudMoonRain className={iconClass} />
            break;
        case 'Heavy rain' :
            day_night ? icon = <BsCloudRainHeavy className={iconClass} /> : icon = <BsCloudRainHeavyFill className={iconClass} />
            break;
        case 'Thunderstorm' :
            day_night ? icon = <BsCloudLightningRain className={iconClass} /> : icon = <BsCloudLightningRainFill className={iconClass} />
            break;
        case 'Snow' :
            day_night ? icon = <BsCloudSnow className={iconClass} /> : icon = <BsCloudSnowFill className={iconClass} />
            break;
        case 'Mist' :
            day_night ? icon = <RiMistLine className={iconClass} /> : icon = <RiMistFill className={iconClass} />
            break;
        default : 
    }
    return icon;
}