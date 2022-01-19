import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CountryInfo from './CountryInfo.js';

const CountryList = ({searchInput}) => {
    const [countries, setCountries] = useState([]);
    const [content, setContent] = useState(<></>);

    const getCountries = () => {
        if(searchInput){
            axios.get(`https://restcountries.com/v3.1/name/${searchInput}`).then(res => {
                setCountries(res.data);
            });
        }
        else{
            setCountries([]);
        }
    }

    const getContent = () => {
        if(searchInput){
            if(countries.length > 10){
                return "Too many matches, specify another filter.";
            }
            else if(countries.length === 1){
                const country = countries[0];
                return (
                    <CountryInfo country={country}/>
                );
            }
            else{
                return (<ul>{countries.map(country => <li key={country.name.official}>{country.name.common} <button onClick={() => showCountry(country)}>Show</button></li>)}</ul>);
            }
        }
        else{
            return <></>;
        }
    }

    const showCountry = (country) => {
        setCountries([country]);
    }

    useEffect(getCountries, [searchInput]);
    useEffect(() => setContent(getContent()), [countries]);

    return (
        <div>
            {content}
        </div>
    );
}

export default CountryList;