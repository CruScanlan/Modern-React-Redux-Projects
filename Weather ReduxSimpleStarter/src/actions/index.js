import axios from 'axios';

const WEATHER_API_KEY = '561972a2a28d02b0319e51a56ddecc29';
const WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${WEATHER_ROOT_URL}&q=${cityName},aus`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}