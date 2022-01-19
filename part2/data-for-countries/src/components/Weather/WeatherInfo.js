import React, {useEffect, useState} from 'react';
import axios from 'axios';

const WeatherInfo = ({country}) => {
    const [weatherData, setWeatherData] = useState();
    const [content, setContent] = useState(<></>);

    const getWeatherData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`).then(res => setWeatherData(res.data));
    }

    useEffect(getWeatherData, [country]);
    useEffect(() => setContent(getContent), [weatherData]);

    const getContent = () => {
        if(weatherData){
            return (
                <div>
                    <h2>Weather in {country.capital}</h2>
                    <p>Temperature: {weatherData.main.temp}&deg; Celsius</p>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Image of current weather conditions"/>
                    <p>Wind: {weatherData.wind.speed} m/sec, Direction: {weatherData.wind.deg} Degrees</p>
                </div>
            )
        }
        else{
            return (
                <></>
            )
        }
    }

    return (
        <>
            {content}
        </>
    )
}

export default WeatherInfo;