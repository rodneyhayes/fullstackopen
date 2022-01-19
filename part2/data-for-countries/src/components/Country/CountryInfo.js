import React from 'react';

const CountryInfo = ({country}) => {
    return (
        <div>
            <h2>{country.name.common}</h2>
            <div>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
            </div>
            <h3>Languages</h3>
            <div>
                <ul>
                    {Object.values(country.languages).map(value => <li key={value}>{value}</li>)}
                </ul>
            </div>
            <div>
                <img src={country.flags.png} alt="A country's flag"/>
            </div>
        </div>
    )
}

export default CountryInfo;