import axios from "axios";

//  API KEY потрібно отримати на api.openweathermap.org

export default class Servise {
  static async getWeatherNow(location) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a8d344e129de026cf1bf230de1f6142f`
    );
    return response.data;
  }

  static async getWeatherNowMyLoc(coords) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=a8d344e129de026cf1bf230de1f6142f`
    );
    return response.data;
  }
}
