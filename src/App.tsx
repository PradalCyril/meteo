import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleWeatherDisplay from './components/SingleWeatherDisplay/SingleWeatherDisplay';
import BackgroundDisplay from './components/BackgroundDisplay/BackgroundDisplay';
import WeeklyWeatherDisplay from './components/WeeklyWeatherDisplay/WeeklyWeatherDisplay';
import { ISingleWeatherDisplay } from './utils/interface';
import './App.css';

const currentWeatherRequest = `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=${process.env.REACT_APP_METEO_TOKEN}`;
const weeklyWeatherRequest = `https://api.openweathermap.org/data/2.5/onecall?lat=48.8588377&lon=2.27702&units=metric&exclude=current,hourly,minutely&appid=${process.env.REACT_APP_METEO_TOKEN}`;

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState<ISingleWeatherDisplay>({
    cityName: '',
    temperature: 0,
    mainWeather: ''
  });
  const [isCurrentWeatherInError, setIsCurrentWeatherInError] = useState<boolean>(false);
  const [daily, setDaily] = useState<any[]>([]);
  const [isDailyInError, setIsDailyInError] = useState<boolean>(false);
  const getCurrentWeatherData: any = () => axios.get(currentWeatherRequest)
    .then((res): void => {
      const data = res.data;
      const cityName = data.name;
      const mainWeather = data.weather ? data.weather[0].main : '';
      const temperature = data.main.temp;
      setCurrentWeatherData({
        cityName,
        mainWeather,
        temperature
      });
    }).catch((err) => { setIsCurrentWeatherInError(true) });

  const getDaily: any = () => axios.get(weeklyWeatherRequest)
    .then((res): void => {
      const data = res.data;
      const daily = data.daily;
      setDaily(daily);
    }).catch((err) => { setIsDailyInError(true) });

  useEffect(() => {
    getCurrentWeatherData();
    getDaily();
  }, []);

  // Error management if the Api doesn't work.
  if (isCurrentWeatherInError || isDailyInError)
    return (
      <div className="error-container">
        <p>An error has occurred, please reload the page.</p>
        <input type='button' onClick={() => window.location.reload()} value='Refresh Page' />
      </div>
    );

  const { mainWeather, cityName, temperature } = currentWeatherData;

  return (
    <div className="weather-container">
      <BackgroundDisplay weather={mainWeather} />
      <SingleWeatherDisplay
        mainWeather={mainWeather}
        cityName={cityName}
        temperature={temperature} />
      <WeeklyWeatherDisplay daily={daily} />
    </div>
  );
}

export default App;
