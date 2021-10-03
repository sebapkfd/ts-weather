import dateFormat from './dateFormat';

const getData = async (e) => {
    const location = e.target.location.value;
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${location}`, 
            {mode: 'cors'})
        const data = await response.json();
        const infoTime = data.location.localtime.split(' ');
        const weather = {
            tempC: `${data.current.temp_c}° C`,
            tempF: `${data.current.temp_f}° F`,
            condition: data.current.condition.text,
            humidity: `${data.current.humidity}%`,
            wind: `${data.current.wind_kph} Km/h`,
            country: data.location.country,
            city: data.location.name,
            feelsLikeC: `${data.current.feelslike_c}° C`,
            feelsLikeF: `${data.current.feelslike_f}° F`,
            icon: `https:${data.current.condition.icon}`,
            currentDate: dateFormat(infoTime[0]),
            currentTime: infoTime[1]
        };
        return weather;
    }
    catch (error) {
        return error;
    }
}

export default getData;