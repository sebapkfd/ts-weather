import React, {useState} from 'react';
import Title from './components/Title';
import Input from './components/Input';
import Info from './components/Info';
import Footer from './components/Footer';
import getData from './services/getData';
import './App.css';

function App() {
  const [report, setReport] = useState({});
  const [tempType, setTempType] = useState('C');

  const changeTempType = () => (tempType === 'C') ? setTempType('F') : setTempType ('C');

  const getWeather = async (e: string) => {
    let newReport = await getData(e);
    if (!('error' in newReport)) {
      setReport(newReport);
    }
  }

  return (
    <div className="App">
      <Title/>
      <Input handleSubmit={(e) =>getWeather(e)} handleScale={() => changeTempType()} tempType={tempType}/>
      <Info weather={report} opt={tempType}/>
      <Footer/>
    </div>
  );
}

export default App;
