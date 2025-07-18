import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "2f5cb85965e0a39a8636cd6a7370ea55";

    let getWeatherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleCityName = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try{
            setErr(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); //clear input only after success
        } catch (err) {
            setErr(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleCityName}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
                {err && <p style={{color: "red"}} >No such place exists!</p>}
            </form>
        </div>
    );
}