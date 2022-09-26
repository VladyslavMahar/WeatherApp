import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import WeatherInfo from "./components/WeatherInfo";
import Servise from "./components/API/Servis";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const time = new Date();
  const getWeather = async (e) => {
    if (e.key === "Enter" && location) {
      await Servise.getWeatherNow(location)
        .then((res) => setData(res))
        .catch((e) => setData(e.response.status))
        .finally(() => setLocation(""));
    }
  };

  const myLoc = () => {
    Servise.getWeatherNowMyLoc(setData);
  };
  useEffect(() => {
    myLoc();
  }, []);

  return (
    <div
      className={
        time.getHours() > 6 && time.getHours() < 18 ? "App day" : "App night"
      }
    >
      <Header
        myLoc={myLoc}
        getWeather={getWeather}
        location={location}
        setLocation={setLocation}
      />
      <WeatherInfo data={data} />
      <WeatherDetails data={data} />
    </div>
  );
}

export default App;
