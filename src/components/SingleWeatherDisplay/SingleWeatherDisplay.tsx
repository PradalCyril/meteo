import React from 'react';
import './SingleWeatherDisplay.css';

interface ISingleWeatherDisplay {
    data: any;
}

const SingleWeatherDisplay = (props: ISingleWeatherDisplay) => {
    const {data} = props;
    if(!Object.keys(data).length) return <div></div>;
    const weather = data.weather || {};
    const cityName = data.name || '';
    const temp = data.main ? data.main.temp : '';
    const main = weather[0].main || 'no data';
    return (
        <div className="single-weather-container">
            <h2 className='city-name'>{cityName}</h2>
            <p className='actual-weather'>{main}</p>
            <h1 className='actual-temp'>{Math.ceil(temp)}°</h1>
        </div>
    );
}

export default SingleWeatherDisplay;