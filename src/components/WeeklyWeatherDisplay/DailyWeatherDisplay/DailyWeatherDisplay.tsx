import React, { useState } from 'react';
import DailyWeatherDetails from './DailyWeatherDetails/DailyWeatherDetails';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import { IDailyWeatherDisplay } from '../../../utils/interface';
import './DailyWeatherDisplay.css';

const DailyWeatherDisplay = (props: IDailyWeatherDisplay): JSX.Element => {
    const [isClicked, setIsClicked] = useState(false);
    const { dayData, day } = props;
    if (!Object.keys(dayData).length) return <div />;
    const details = isClicked ? <DailyWeatherDetails dayData={dayData}/> : <div></div>;
    
    return (<div>
        <div className='daily-weather-container' onClick={()=>{setIsClicked(!isClicked)}}>
            <p className='day daily-weather-text'>{day.charAt(0).toUpperCase() + day.slice(1)}</p>
            <WeatherIcon iconCode={dayData.iconCode} />
            <p className='daily-weather-text max-temp'>{Math.ceil(dayData.temperatureMax)}°</p>
            <p className='daily-weather-text min-temp'>{Math.ceil(dayData.temperatureMin)}°</p>
        </div>
        {details}
        </div>
    );
}

export default DailyWeatherDisplay;