//For fun texts under each weather card box
export default function randomText(con){
    let texts = [];
    switch(con){
        case 'Sunny':
            texts.push("Wear a hat when you go out!" , "It sure is sunny today!" , "When does this heat stop..." , "Can you look at the sun?");
            break;
        case 'Cloudy':
            texts.push("Will it rain or not?" , "I hope it doesn't rain today!" , "Are the clouds black or white?" , "You can't see the sun?");
            break;
        case 'Rain':
            texts.push("Take an umbrella!(Your mom said..)" , "Are you wet now?:)" , "Is that your tears or the rain?" , "Like this type of weather?");
            break;
        case 'Thunder':
            texts.push("Your hairs are up!" , "Lightning or thunder first?" , "Look! A tree is on fire!");
            break;
        case 'Snow':
            texts.push("Surely miss playing with snow!" , "Snowballssss" , "Are snowm-e-n even real?");
            break;
        case 'Mist':
            texts.push("I can't see well" , "Should i wipe my car?" , "Is it snow or dusts?");
            break;
        default:
    }
    var item = texts[Math.floor(Math.random()*texts.length)];
    return item;
}