import React from 'react';

const Info = (props) => {
    const {weather} = props;
    if(weather.temp) {
        return (
            <div className="info">
                <div>
                    <h3>{weather.city}</h3>
                    <h3>{weather.country}</h3>
                    <h3>{weather.currentDate}</h3>
                </div>
                <div>
                    <img src={weather.icon} alt="icon"/>
                    <h3>{weather.temp}</h3>
                    <h3>{weather.condition}</h3>
                </div>
                <div>
                    <h3>{weather.humidity}</h3>
                    <h3>{weather.wind}</h3>
                </div>
                <div>
                    <h3>{weather.feelsLike}</h3>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default Info;