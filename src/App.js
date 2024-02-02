import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedCurrentWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';

function App() {

  const [query,setQuery] = useState({q:'berlin'})
  const [units,setUnits] = useState({q:'metric'})
  const [weather,setWeather] = useState(null)

  useEffect(() => {

    const fetchWeather = async () => {
      await getFormattedCurrentWeatherData({...query,units})
      .then((data) =>{
        setWeather(data);
      });
      // console.log(data);
    };
  
    fetchWeather();
  },[query,units]);


  return (
    <div className= 'bg-gradient-to-br from-cyan-700 to-blue-700'>
     <div className="mx-auto  max-w-screen-md py-5 px32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400">

      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery= {setQuery} units ={units} setUnits = {setUnits} />

      {weather && (
      <>
      <TimeAndLocation weather = {weather} />
      <TemperatureAndDetails weather={weather}/>
      <Forecast title="Hourly Forcast" items={weather.hourly}/>
      <Forecast title="Daily Forcast" items={weather.daily} />
      </>
      )}


      </div>   
  </div>
  );
}

export default App;











