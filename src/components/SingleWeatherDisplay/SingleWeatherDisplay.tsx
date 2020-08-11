import React from 'react';
import { ISingleWeatherDisplay } from '../../utils/interface';
import './SingleWeatherDisplay.css';

const SingleWeatherDisplay = (props: ISingleWeatherDisplay): JSX.Element => {
    const { mainWeather, temperature, cityName } = props;
    if (!mainWeather || !temperature || !cityName) return <div></div>;
    return (
        <div className="single-weather-container">
            <h2 className='city-name'>{cityName}</h2>
            <p className='actual-weather'>{mainWeather}</p>
            <h1 className='actual-temp'>{Math.ceil(temperature)}°</h1>
        </div>
    );
}

export default SingleWeatherDisplay;