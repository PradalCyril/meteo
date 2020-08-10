import React from 'react';

interface IWeatherIcon {
    iconCode: string;
}

const WeatherIcon = (props: IWeatherIcon) => {
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