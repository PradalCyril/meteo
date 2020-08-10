import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SingleWeatherDisplay from './components/SingleWeatherDisplay/SingleWeatherDisplay';
import BackgroundDisplay from './components/BackgroundDisplay/BackgroundDisplay';
import WeeklyWeatherDisplay from './components/WeeklyWeatherDisplay/WeeklyWeatherDisplay';

const currentWeatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=${process.env.REACT_APP_METEO_TOKEN}`;
const weeklyWeatherRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=48.8588377&lon=2.27702&units=metric&exclude=current,hourly,minutely&appid=${process.env.REACT_APP_METEO_TOKEN}`;

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState<any>({});
  const [weeklyWeatherData, setWeeklyWeatherData] = useState<any>({});

  const getCurrentWeatherData: any = () => axios.get(currentWeatherRequest)
    .then((res): void => {
      const response = res;
      setCurrentWeatherData(response.data);
    }).catch((err) => { console.log(err) });

  const getWeeklyWeatherData: any = () => axios.get(weeklyWeatherRequest)
    .then((res): void => {
      const response = res;
      setWeeklyWeatherData(response.data);
    }).catch((err) => { console.log(err) });

  useEffect(() => {
    getCurrentWeatherData();
    getWeeklyWeatherData();
  }, []);

  const weather = currentWeatherData.weather ? currentWeatherData.weather[0].main : '';
  return (
    <div className="weather-container">
      <BackgroundDisplay weather={weather} />
      <SingleWeatherDisplay data={currentWeatherData} />
      <WeeklyWeatherDisplay data={weeklyWeatherData} />
    </div>
  );
}

export default App;
