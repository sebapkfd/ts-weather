const placeFormat = (weather) => {
    const {city, country} = weather;

    let place;
    if (country === 'United States of America') {
        place = <h3>{city} - USA</h3>
    } 
    else if (country === 'United Kingdom') {
        place = <h3>{city} - UK</h3>
    } 
    else if (country === 'United Arab Emirates') {
        place = <h3>{city} - UAE</h3>
    }
    else {
        place = <h3>{city} - {country}</h3>
    }

    return place;
}

export default placeFormat;