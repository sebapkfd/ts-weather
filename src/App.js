import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Info from './components/Info';
import dateFormat from './components/dateFormat';

function App() {
  const [report, setReport] = useState({});

  const getWeather = async (e) => {
    const location = e.target.location.value;
    try {
      const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=a5f5d927bbc64246a51205628200112&q=${location}`, 
          {mode: 'cors'})
      const data = await response.json();
        const infoTime = data.location.localtime.split(' ');
        const weather = { 
            temp: `${data.current.temp_c}°`,
            condition: data.current.condition.text,
            humidity: `${data.current.humidity}%`,
            country: data.location.country,
            city: data.location.name,
            feelsLike: `${data.current.feelslike_c}°`,
            icon: `https:${data.current.condition.icon}`,
            currentDate: dateFormat(infoTime[0]),
            currentTime: infoTime[1]
        };
        console.log(weather);
        setReport(weather)
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="App">
      <Title/>
      <Input handleSubmit={getWeather}/>
      <Info weather={report}/>
    </div>
  );
}

export default App;
