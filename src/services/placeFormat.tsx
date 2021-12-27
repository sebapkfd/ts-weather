import React from "react";

const placeFormat = (city: string, country: string) => {
    if (country.length >= 14) {
        let matches  = country.replace(' of ', ' ').match(/\b(\w)/g);
        let acronym = matches!.join('').toUpperCase();
        return (
            <h3>{city} - {acronym}</h3>
        )
    }
    return <h3>{city} - {country}</h3>
}

export default placeFormat;