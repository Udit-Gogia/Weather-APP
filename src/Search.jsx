import React from "react";
import api from "./Api"

const Search = (props)=>{
    if(props.e.key==="Enter"){
      fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => {
        setCity('');
        setWeather(result);
        console.log(result);
      });
    }
  }

export default Search;  