import React, { useState } from 'react';
import './WeeklyWeatherDisplay.css';
import DailyWeatherDisplay from './DailyWeatherDisplay/DailyWeatherDisplay';
import { days } from '../../utils/enum';
import { IData } from '../../utils/interface';

interface IWeeklyWeatherDisplay {
    data: any;
}

const dayName = [
    days.SUNDAY,
    days.MONDAY,
    days.TUESDAY,
    days.WEDNESDAY,
    days.THURSDAY,
    days.FRIDAY,
    days.SATURDAY
];

const WeeklyWeatherDisplay = (props: IWeeklyWeatherDisplay) => {

    const { data } = props;
    if (!Object.keys(data).length) return <div></div>;
    const { daily } = data;
    daily.shift();
    const currentDate = new Date();
    const dailyList = daily.map((weatherDay: any, index: number) => {
        console.log(weatherDay);
        const dayData: IData = {
            humidity: weatherDay.humidity,
            pressure: weatherDay.pressure,
            sunrise: weatherDay.sunrise,
            sunset: weatherDay.sunset,
            temperatureMax: weatherDay.temp.max,
            temperatureMin: weatherDay.temp.min,
            iconCode: weatherDay.weather[0].icon,
            windDeg: weatherDay.wind_deg,
            windSpeed: weatherDay.wind_speed
        }
        const date = new Date(currentDate);
        date.setDate(date.getDate() + index + 1);
        const day: string = dayName[date.getDay()];
        return <DailyWeatherDisplay key={weatherDay.dt} day={day} dayData={dayData} />;
    })
    return (
        <div className='weekly-weather-container'>
            {dailyList}
        </div>
    );
}

export default WeeklyWeatherDisplay;