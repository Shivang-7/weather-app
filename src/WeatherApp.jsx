import { useState } from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState(null);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>
                Weather Widget
                <img
                    src="weather-emoji.png"
                    alt="Weather Icon"
                    style={{ width: '24px', verticalAlign: 'middle', marginLeft: '8px' }}
                />
            </h2>

            <SearchBox updateInfo={updateInfo} />
            {
                weatherInfo === null
                ? <p>🔍 Search for a city to get weather info.</p>
                : <InfoBox info={weatherInfo} />
            }
        </div>
    );
}