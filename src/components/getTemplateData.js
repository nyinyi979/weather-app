//For modifying the data obtained to be useable 
export default function getExtractedData(template){
    average(template.temp);
    Largest(template.max_temp);
    Smallest(template.min_temp);
    average(template.humidity);
    average(template.wind);
    average(template.cloud);       
    maxFreq(template.long_description);
    //just for rain and drizzle , i had to do this
    if(template.long_description[0] === "light rain"){
        template.long_description.length = 0;
        template.long_description.push("Few rain");
    }
    else if(template.long_description[0] === "moderate rain" || template.long_description === "high intensity rain"){
        template.long_description.length = 0;
        template.long_description.push("Heavy rain");
    }
    else if(template.long_description[0] === "overcast clouds" || template.long_description[0] === "broken clouds"){
        template.long_description.length = 0;
        template.long_description.push("Very cloudy");
    }
    template.long_description = template.long_description[0].charAt(0).toUpperCase() + template.long_description[0].slice(1);
}


//Largest is for higest temperature of the day
function Largest(list){
    if(list.length === 0) return; 
    var largest = list[0]; 
    for(var i = 0; i<list.length; i++){
        if(largest < list[i]){
            largest = list[i];
        }
    }
    list.length = 0;
    list.push(largest.toFixed(1));
}


//Smallest is for the lowest temperature of the day
function Smallest(list){
    if(list.length === 0) return; 
    var smallest = list[0]; 
    for(var i = 0; i<list.length; i++){
        if(smallest > list[i]){
            smallest = list[i];
        }
    }
    list.length = 0;
    list.push(smallest.toFixed(1));
}


//Average is to get average value 
function average(list){
    var sum = 0,length = list.length;
    for(var i = 0 ; i<list.length; i++){
        sum += list[i];
    }
    list.length = 0;
    list.push((sum/length).toFixed(1));
}



function maxFreq(arr) {
    // Insert all elements in hash.
    let n = arr.length;
    var hash = new Map();
    for (var i = 0; i < n; i++) {
        if(hash.has(arr[i]))
            hash.set(arr[i], hash.get(arr[i])+1)
        else
            hash.set(arr[i], 1)
    }
    // find the max frequency
    var max_count = 0, res = -1;
    hash.forEach((value,key) => {
        if (max_count < value) {
            res = key;
            max_count = value;
        }
    
    });
    arr.length = 0;
    arr.push(res);
}