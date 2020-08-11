import React from 'react';
import { IWeatherIcon } from '../../../utils/interface/IWeatherIcon';

const WeatherIcon = (props: IWeatherIcon): JSX.Element => {
    const { iconCode } = props;
    if (!iconCode || !iconCode.length) return <div />;
    const icon = `http://openweathermap.org/img/w/${iconCode}.png`;
    return (
        <div className="weather-icon-container">
            <img
                src={icon}
                className='weather-icon'
                alt="weather-icon" />
        </div>
    );
}

export default WeatherIcon;