import React, { useState } from "react";
import "./Styles/App.scss"
import Date from "./Date"
import Error from "./Error"
  
const api = {
  key : "dc2f797a7ece10a955d95046c5fa87c1",
  base : "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const imgURL =  `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  const search = (e)=>{
    if(e.key==="Enter"){
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => {
        setCity('');
        setWeather(result);
        console.log(result);
      });
    }
  }
  return (
    <div className="App">
      <div className="main">

        <div className="search-box">
        <input type="text" 
        placeholder="Enter City Name" className="search-bar" 
        onChange={e=>setCity(e.target.value)} 
        value={city} 
        onKeyPress={search}>
        </input>
        </div> 
      {(typeof weather.main !="undefined") ?(
        <div>
        <div className="location-box">

          <div className="location">{weather.name},{weather.sys.country}</div>
          <div className="date"><Date /></div>

        </div> 

        <div className="weather-details">
        <div className="temperature" id="temp">{Math.round(weather.main.temp)}&#176;C</div>
        <div className="weather">{weather.weather[0].main}
        <div>
        <img src={imgURL} className="weather-img"></img></div>
        </div>
        </div>
      </div>
        ):(
          (weather.code === 404)&&(
          <div>
          <Error 
          msg="Please Enter City's name correctly!"
          />
          {console.log(weather.cod)}
        </div> 
          )
        )}
        
        </div>
    </div>
  );
}

export default App;
