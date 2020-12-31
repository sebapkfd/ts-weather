import React from 'react';

const Info = (props) => {

    const {weather} = props;
    if(weather.temp) {
        return (
            <div className="info">
                <h3>{weather.temp}</h3>
                <h3>{weather.condition}</h3>
                <h3>{weather.humidity}</h3>
                <h3>{weather.country}</h3>
                <h3>{weather.city}</h3>
                <h3>{weather.feelsLike}</h3>
                <h3>{weather.currentDate}</h3>
                <h3>{weather.currentTime}</h3>
            </div>
        )
    } else {
        return null;
    }
    
}

export default Info;