import React, { useState } from "react";
import App from "./App";
import axios from "axios";

export default function SearchEngine(){
const [city, setCity]=useState(null);
const [response, setResponse]=useState(null);
const [temperature, setTemperature]=useState(null);
const [humidity, setHumidity]=useState(null);
const [description, setDescription]=useState(null);
const [icon, setIcon]=useState(null);
const [wind, setWind]=useState(null);


function updateCity(event){
    setCity(event.target.value);
}

function showWeather(response){
setTemperature(Math.round(response.data.temperature.current));
setHumidity(response.data.temperature.humidity);
setDescription(response.data.condition.description);
setIcon(response.data.condition.icon_url);
setWind (response.data.wind.speed);
}

function handleSubmit(event){
    event.preventDefault();
let apiKey="eb214ccaa33987f7248o49846e082tab";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    setResponse(
        <ul>
            <li>Temperature:{temperature}ºC</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}</li>
            <li>Wind:{wind}km/h</li>
            <li img src={icon} alt={description}>
            </li>
            </ul>
    );
}

return(
    <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city" onChange={updateCity}/>
            <input type="Submit" value="Search"/>
           </form>
            {response}
        </div>
);
}