import React from "react";
import "./Styles/App.scss"
  
const api = {
  key : "dc2f797a7ece10a955d95046c5fa87c1",
  base : "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="search-box">

        <input type="text" placeholder="Enter City Name" className="search-bar"></input>
      
        </div> 
        <div className="location-box">
          <div className="location"></div>
        </div> 
        </div>
    </div>
  );
}

export default App;
