import React from 'react';

const Info = (props) => {
    const {weather} = props;
    if(weather.temp) {
        return (
            <div className="info">
                <div classname="place-date">
                    <h3>{weather.city}</h3>
                    <h3>{weather.country}</h3>
                    <h3>{weather.currentDate}</h3>
                </div>
                <div className="icon-temp-condition">
                    <div className="icon-container">
                        <img src={weather.icon} alt="icon"/>
                    </div>
                    <h3>{weather.temp}</h3>
                    <h3>{weather.condition}</h3>
                </div>
                <div className="humidity-wind">
                    <h3>Humidity: {weather.humidity}</h3>
                    <h3>Wind: {weather.wind}</h3>
                </div>
                <div className="feels-like">
                    <h3>Feels like: {weather.feelsLike}</h3>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Info;