import React from "react";
import "../styles/weatherDetails.css";
import MyInfoBox from "./UI/MyInfoBox/MyInfoBox";

const WeatherDetails = (props) => {
  return (
    <footer>
      {props.data.name ? (
        <div className="footContainer">
          <MyInfoBox
            name="Feels like"
            info={Math.round(props.data.main.temp - 273)}
            unit="°C"
          />
          <MyInfoBox
            name="Wind speed"
            info={props.data.wind.speed}
            unit="km/h"
          />
          <MyInfoBox name="Humidity" info={props.data.main.humidity} unit="%" />
        </div>
      ) : null}
    </footer>
  );
};

export default WeatherDetails;
