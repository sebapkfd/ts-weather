import React from 'react';
import placeFormat from '../services/placeFormat';

interface weather {
    [key:string]: string;
}

interface weatherOptions {
    weather: weather,
    opt: string
}

const Info = ({ weather, opt }: weatherOptions )=> {
    let temp = (opt === 'C') ? weather.tempC : weather.tempF;
    let feelsLike = (opt === 'C') ? weather.feelsLikeC : weather.feelsLikeF;

    if(weather.city) {
        const place = placeFormat(weather.city, weather.country);
        return (
            <div className="info">
                <div className="place-date">
                    <div className="place">
                        {place}
                    </div>
                    <div className="date">
                        <h3>{weather.currentDate}</h3>
                    </div>
                </div>
                <div className="icon-temp-condition">
                    <div className="icon-container">
                        <img src={weather.icon} alt="icon"/>
                    </div>
                    <div className="temp-condition">
                        <h2 id="temp">{temp}</h2>
                        <h3>{weather.condition}</h3>
                    </div>
                </div>
                <div className="humidity-wind">
                    <h3>Humidity: {weather.humidity}</h3>
                    <h3>Wind: {weather.wind}</h3>
                </div>
                <div className="feels-like">
                    <h3>Feels like: {feelsLike}</h3>
                </div>
            </div>
        )
    }
    return null
}

export default Info;