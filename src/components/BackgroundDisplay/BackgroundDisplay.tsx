import React from 'react';
import sun from '../../assets/sun.jpg';
import cloud from '../../assets/cloudy.jpg';
import rain from '../../assets/pluie.jpg';
import './BackgroundDisplay.css';

interface IBackgroundDisplay {
    weather: string;
}
const getBackground = (weather: string) => {
    switch (weather) {
        case 'Clear':
            return sun;
        case 'Clouds':
            return cloud;
        case 'Rain':
            return rain;
        default:
            return sun;
    }
}

const BackgroundDisplay = (props: IBackgroundDisplay) => {
    const { weather } = props;
    if (!weather || !weather.length) return <div></div>;
    const background = getBackground(weather);
    return (
        <div className="weather-background-container">
            <img
                src={background}
                className='weather-background'
                alt="weather-background" />
        </div>
    );
}

export default BackgroundDisplay;