import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Info from './components/Info';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  const [report, setReport] = useState({});
  const [tempType, setTempType] = useState('C');

  const changeTempType = () => {
    (tempType === 'C') ? setTempType('F') : setTempType ('C');
  }

  const getWeather = async (e) => {
    try {
      let newReport = await Weather(e);
      setReport(newReport)
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Title/>
      <Input handleSubmit={getWeather} handleType={changeTempType} tempType={tempType}/>
      <Info weather={report} opt={tempType}/>
      <Footer/>
    </div>
  );
}

export default App;
