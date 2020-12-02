const contDiv = document.getElementById('content');

async function getWeather(cityName){
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${cityName}`, 
            {mode: 'cors'})
        const data = await response.json();
        const weather = { temp: `${data.current.temp_c}°`, humidity: `${data.current.humidity}%` ,country: data.location.country, city: data.location.name};
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
    infoDiv.innerText = `Location: ${info.city}, ${info.country} \n Temp: ${info.temp} \n Humidity: ${info.humidity}`;
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