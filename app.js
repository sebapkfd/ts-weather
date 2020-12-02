const contDiv = document.getElementById('content');



async function getWeather(cityName){
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${cityName}`, 
            {mode: 'cors'})
        const data = await response.json();
        console.log(data);
        const weather = { 
            temp: `${data.current.temp_c}°`,
            condition: data.current.condition.text,
            humidity: `${data.current.humidity}%`,
            country: data.location.country,
            city: data.location.name,
            feelsLike: `${data.current.feelslike_c}°`,
            icon: `http:${data.current.condition.icon}`,
            dateTime: data.location.localtime
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

    const iconDiv = document.createElement('div');
    iconDiv.setAttribute('id', 'iconDiv');

    const img = document.createElement('img');
    img.src = info.icon;

    const tempDiv = document.createElement('div');
    tempDiv.setAttribute('id', 'tempDiv');
    tempDiv.innerText = `${info.temp}`;

    const humidityDiv = document.createElement('div');
    humidityDiv.setAttribute('id', 'humidityDiv');
    humidityDiv.innerText = `Humidity: ${info.humidity}`;

    const feelsLikeDiv = document.createElement('div');
    feelsLikeDiv.setAttribute('id', 'feelsLikeDiv');
    feelsLikeDiv.innerText = `Feels like: ${info.feelsLike}`;

    infoDiv.appendChild(locationDiv);
    iconDiv.appendChild(img);
    infoDiv.appendChild(iconDiv);
    infoDiv.appendChild(tempDiv);
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