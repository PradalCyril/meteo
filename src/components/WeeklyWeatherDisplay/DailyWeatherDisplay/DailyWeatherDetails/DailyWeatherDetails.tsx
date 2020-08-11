import React from 'react';
import { IDailyWeatherDetails } from '../../../../utils/interface';
import './DailyWeatherDetails.css';

const DailyWeatherDetails = (props: IDailyWeatherDetails): JSX.Element => {
    const { dayData } = props;
    if (!Object.keys(dayData).length) return <div />;
    const humidity = (
        <div className='details-content'>
            <p className='details-text'>Humidity: </p>
            <p className='details-text'>{dayData.humidity}%</p>
        </div>
    );
    const pressure = (
        <div className='details-content'>
            <p className='details-text'>Pressure:</p>
            <p className='details-text'>{dayData.pressure}&nbsp;hPa</p>
        </div>
    );
    const sunriseDate = new Date(dayData.sunrise * 1000);
    const sunriseHour = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()}`
    const sunrise = (
        <div className='details-content'>
            <p className='details-text'>Sunrise: </p>
            <p className='details-text'>{sunriseHour}</p>
        </div>
    );
    const sunsetDate = new Date(dayData.sunset * 1000);
    const sunsetHour = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()}`
    const sunset = (
        <div className='details-content'>
            <p className='details-text'>Sunset:</p>
            <p className='details-text'>{sunsetHour}</p>
        </div>
    );
    const windSpeed = (
        <div className='details-content'>
            <p className='details-text'>Wind speed:</p>
            <p className='details-text'>{Math.ceil(dayData.windSpeed)}&nbsp;km/h</p>
        </div>
    );
    const windDeg = (
        <div className='details-content'>
            <p className='details-text'>Wind Degre:</p>
            <p className='details-text'>{dayData.windDeg}°</p>
        </div>
    );
    return (
        <div className='daily-details-container'>
            {humidity}
            {pressure}
            {sunrise}
            {sunset}
            {windSpeed}
            {windDeg}
        </div>
    );
}

export default DailyWeatherDetails;