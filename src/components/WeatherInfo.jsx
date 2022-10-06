import React from "react";
import "../styles/weatherInfo.css";
import MyInfoBox from "./UI/MyInfoBox/MyInfoBox";

const WeatherInfo = (props) => {
  return (
    <main>
      <div className="containerInfo">
        <h1>{props.data.name}</h1>
        {props.data.main ? (
          <MyInfoBox
            name={props.data.weather[0].main}
            info={Math.round(props.data.main.temp - 273)}
            unit="°C"
          />
        ) : props.data.status === 404 ? (
          <h2>{props.data.statusText}</h2>
        ) : (
          <h2>Select your location</h2>
        )}
      </div>
    </main>
  );
};

export default WeatherInfo;
