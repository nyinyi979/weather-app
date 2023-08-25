let data = [];
let err_context = "";
//Geolocation function to get longitude and latitude 
export default function getLocation(cb){
    function error_handling(err) {
        err_context = err.message;
        console.log(err.message)
        switch(err.code){
            case 0 :
                err_context = 'Geolocation permission was denied! Give permission and reload';
                break;
            case 1 : 
                err_context = 'Give location access permission and reload the page!';
                break;
            case 2 : 
                err_context = "Connection timed out";
                break;
            case 3 : 
                err_context = "Unknown error!";
                break;
            default:
        }
    }
    function coordinating(location)  {
        if(data.length === 0){
            data.push(location.coords.longitude);
            data.push(location.coords.latitude);
        }
    }
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(coordinating, error_handling);
        setTimeout(()=>{
            return cb(err_context , data);
        }, 1000)
    }
}