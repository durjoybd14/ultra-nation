import React from 'react';
import "./country.css"

const Country = (props) => {
    const flagStyle = {
        height: '50px'
    }
    const countryStyle = {
        margin: '10px',
        padding: '20px',
        border: '1px solid blue'
    }
    const { name, area, flag, population, capital, region, timezones } = props.country;
    // console.log(props)
    const handleCountryAdd = props.handleCountryAdd
    return (
        <div className="country-continer" style={countryStyle}>
            <h1>Name: {name}</h1>
            <h3> Capital: {capital}</h3>
            <img style={flagStyle} src={flag} alt="" />
            <h4>Total Area: {area} km<sup>2</sup></h4>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
            <p>TimeZone: {timezones[0]}</p>
            <button onClick={() => handleCountryAdd(props.country)}>Country Added</button>

        </div>
    );
};

export default Country;