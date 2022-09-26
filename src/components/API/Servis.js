import axios from "axios";

//  API KEY потрібно отримати на api.openweathermap.org

export default class Servise {
  static async getWeatherNow(location) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={API KEY}`
    );

    return response.data;
  }

  static getWeatherNowMyLoc(setData) {
    const successCall = (position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API KEY}`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    const errorCall = (error) => {
      alert(error.mesage);
    };

    navigator.geolocation.getCurrentPosition(successCall, errorCall);
  }
}
