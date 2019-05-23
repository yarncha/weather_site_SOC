import React from 'react';
import Icon from './Icon';

const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?';

class TodayWeather extends React.Component {
  state = {
    weather: null
  };

  async componentDidMount() {
    const { cityId } = this.props.match.params;
    const api = `${API_WEATHER}q=${cityId}&appid=3623c76773a67a92ce292b38ce60386a`;

    const weather = await fetch(api)
      .then(res => res.json())
      .then(data => data);

    this.setState({
      weather
    });
  }

  render() {
    const { cityId } = this.props.match.params;
    const { weather } = this.state;

    if (!weather) {
      return <div>Loading...</div>;
    }

    const celsius = (weather.main.temp - 273.15).toFixed(2); // kelvin to celsius
    const weatherMain = weather.weather[0].main;
    const iconId = weather.weather[0].id;

    return (
      <div className="weather-today">
        <h2 className="weather-city">{cityId}</h2>

        <div className="weather-today-meta">
          <h3 className="weather-main">{weatherMain}</h3>
          <div className="weather-temp">{celsius}°</div>
        </div>
        <div className="weather-image">
          <Icon iconId={iconId} />
        </div>
      </div>
    );
  }
}

export default TodayWeather;
