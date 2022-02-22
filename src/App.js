import React, { useState } from "react";
import "./Styles/App.scss"
  
const api = {
  key : "dc2f797a7ece10a955d95046c5fa87c1",
  base : "https://api.openweathermap.org/data/2.5/"
}

function setDate(){

  
  var date = new Date();
  var DATE = date.getDate();
  var day = date.getDay();
  var month = date.getMonth();
  var year = date.getFullYear();
  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  return(
    `${days[day]} ${DATE} ${months[month]} ${year}`
  )
}
function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const search = (e)=>{
    if(e.key==="Enter"){
      fetch(`${api.base}weather?q={city}&units=metric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => setWeather(result));
      
    }
  }
  return (
    <div className="App">
      <div className="main">

        <div className="search-box">
        <input type="text" placeholder="Enter City Name" className="search-bar"></input>
        </div> 

        <div className="location-box">

          <div className="location">CityName</div>
          <div className="date">{setDate()}</div>

        </div> 

        <div className="weather-details">
        <div className="temperature" id="temp">25&#176;C</div>
        <div className="weather">Sunny</div>

        </div>
        </div>
    </div>
  );
}

export default App;
