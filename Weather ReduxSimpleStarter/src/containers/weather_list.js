import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperature = cityData.list.map(weather => weather.main.temp-273);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lat , lon} = cityData.city.coord;

        return (
            <tr key={cityName}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td>
                    <Chart data={temperature} color="orange" height={120} width={180} units="°C" />
                </td>
                <td>
                    <Chart data={pressure} color="blue" height={120} width={180} units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="red" height={120} width={180} units="%"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);