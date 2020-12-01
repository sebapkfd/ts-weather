const contDiv = document.getElementById('content');

async function getWeather(cityName){
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${cityName}`, {mode: 'cors'})
        const data = await response.json();
        const weather = { temp: `${data.current.temp_c}°`, humidity: `${data.current.humidity}%` ,country: data.location.country, city: data.location.name};
        console.log(data);
        return weather;
    } catch (error) {
        console.log(error);
    }
}

function displayinfo(info){
    const infoDiv = document.createElement('div');
    infoDiv.innerText = `Location: ${info.city}, ${info.country} \n Temp: ${info.temp} \n Humidity: ${info.humidity}`;
    contDiv.appendChild(infoDiv);
}

function displayForm(){
    const formDiv = document.createElement('div');
    formDiv.setAttribute('id', 'formDiv')
    
    let titleLabel = document.createElement('label');
    titleLabel.innerText = 'Enter city';

    let cityInput = document.createElement('input');
    cityInput.setAttribute('id', 'cityInput');

    let inputButton = document.createElement('button');
    inputButton.innerText = 'Search';
    inputButton.addEventListener('click', () =>{
        let city = document.getElementById('cityInput').value;
        if (city != undefined && city != ''){
            getWeather(city).then( (res) =>{
                console.log(res);
                displayinfo(res);
            });
        }
    })

    formDiv.appendChild(titleLabel);
    formDiv.appendChild(cityInput);
    formDiv.appendChild(inputButton);
    contDiv.appendChild(formDiv);
}


displayForm();