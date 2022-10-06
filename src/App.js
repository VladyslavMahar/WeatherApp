import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";
import WeatherInfo from "./components/WeatherInfo";
import Servise from "./components/API/Servis";
import { useLocation } from "./hooks/useLocation";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const time = new Date();
  const coords = useLocation();
  const [isloading, setIsLoading] = useState(false);

  const getWeather = async (e) => {
    if (e.key === "Enter" && location) {
      try {
        const response = await Servise.getWeatherNow(location);
        setIsLoading(true);
        setData(response);
        setLocation("");
        setIsLoading(false);
      } catch (e) {
        setData(e.response);
      }
    }
  };

  const myLoc = async () => {
    try {
      const response = await Servise.getWeatherNowMyLoc(coords);
      setIsLoading(true);
      setData(response);
      setIsLoading(false);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    if (coords.latitude) myLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords.latitude]);

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
      {isloading ? <Loader /> : <WeatherInfo data={data} />}
      <WeatherDetails data={data} />
    </div>
  );
}

export default App;
