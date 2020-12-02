const contDiv = document.getElementById('content');

function date(dateStr){
    let aux = dateStr.split(/\D/g);
    return [aux[2],aux[1],aux[0] ].join("-");
};

async function getWeather(cityName){
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${cityName}`, 
            {mode: 'cors'})
        const data = await response.json();
        console.log(data);
        const tiemInfo = data.location.localtime.split(' ');
        const weather = { 
            temp: `${data.current.temp_c}°`,
            condition: data.current.condition.text,
            humidity: `${data.current.humidity}%`,
            country: data.location.country,
            city: data.location.name,
            feelsLike: `${data.current.feelslike_c}°`,
            icon: `https:${data.current.condition.icon}`,
            currentDate: date(tiemInfo[0]),
            currentTime: tiemInfo[1]
        };
        console.log(weather);
        return weather;
    } catch (error) {
        console.log(error);
    }
}

function displayinfo(info){
    if(contDiv.lastChild.className == 'infoDiv'){
        contDiv.removeChild(contDiv.lastChild);
    }

    const infoDiv = document.createElement('div');
    infoDiv.className = 'infoDiv';

    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id', 'locationDiv');
    locationDiv.innerText = `${info.city}, ${info.country}`;

    const timeDiv = document.createElement('dov');
    timeDiv.setAttribute('id', 'timeDiv');
    timeDiv.innerText = `${info.currentDate} ${info.currentTime}`;

    const tempIconDiv = document.createElement('div');
    tempIconDiv.setAttribute('id', 'tempIconDiv');

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('id', 'iconDiv');

    const img = document.createElement('img');
    img.src = info.icon;

    const tempDiv = document.createElement('div');
    tempDiv.setAttribute('id', 'tempDiv');
    tempDiv.innerText = `${info.temp}`;

    const conditionDiv = document.createElement('div');
    conditionDiv.setAttribute('id','conditionDiv');
    conditionDiv.innerText = `${info.condition}`;

    const humidityDiv = document.createElement('div');
    humidityDiv.setAttribute('id', 'humidityDiv');
    humidityDiv.innerText = `Humidity: ${info.humidity}`;

    const feelsLikeDiv = document.createElement('div');
    feelsLikeDiv.setAttribute('id', 'feelsLikeDiv');
    feelsLikeDiv.innerText = `Feels like: ${info.feelsLike}`;

    infoDiv.appendChild(locationDiv);
    infoDiv.appendChild(timeDiv);
    iconDiv.appendChild(img);
    tempIconDiv.appendChild(iconDiv);
    tempIconDiv.appendChild(tempDiv);
    infoDiv.appendChild(tempIconDiv);
    infoDiv.appendChild(conditionDiv);
    infoDiv.appendChild(humidityDiv);
    infoDiv.appendChild(feelsLikeDiv);
    contDiv.appendChild(infoDiv);
}

function displayForm(){
    const titleDiv = document.createElement('div');
    titleDiv.className = 'titleDiv';
    titleDiv.innerText = 'Weather'

    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'formDiv')

    let cityInput = document.createElement('input');
    cityInput.setAttribute('id', 'cityInput');
    cityInput.setAttribute('placeholder', 'Enter city')

    contDiv.appendChild(titleDiv);
    formDiv.appendChild(cityInput);
    contDiv.appendChild(formDiv);

    cityInput.addEventListener('keyup', (event)=>{
        let city = document.getElementById('cityInput').value;
        if(event.key === 'Enter' && city != undefined && city != ''){
            getWeather(city).then( (res) =>{
                displayinfo(res);
            });
        }
    });
}


displayForm();