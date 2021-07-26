import React from 'react';

const Info = (props) => {
    const {weather, opt} = props;

    let place;
    if (weather.country === 'United States of America') {
        place = <h3>{weather.city} - USA</h3>
    } 
    else if (weather.country === 'United Kingdom') {
        place = <h3>{weather.city} - UK</h3>
    } 
    else if (weather.country === 'United Arab Emirates') {
        place = <h3>{weather.city} - UAE</h3>
    }
    else {
        place = <h3>{weather.city} - {weather.country}</h3>
    }

    let temp = (opt === 'C') ? weather.tempC : weather.tempF;
    let feelsLike = (opt === 'C') ? weather.feelsLikeC : weather.feelsLikeF;

    if(weather.city) {
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