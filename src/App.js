import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

//Get API Key
const API_KEY = 'e7fda0eea41c22516d57caea675aaed6';

class App extends Component {

  //Setting up our state
  state = {
    temparature : undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  //Get Weather function
  getWeather = async (e) =>{
    e.preventDefault();
   //Setup our city and country variables
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
   //Getting the API
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city && country){
      this.setState({
        temparature : data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather.icon,
        error: undefined
      })
    }else{
      this.setState({
        temparature : undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: 'Please enter city and country'
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 col-md-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 col-md-7 form-container">
                <Form getWeather = {this.getWeather}/>
                  <Weather
                    temparature = {this.state.temparature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    icon = {this.state.icon}
                    error = {this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
