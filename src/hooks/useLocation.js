import { useState } from "react";

export const useLocation = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const successCall = (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };
  navigator.geolocation.getCurrentPosition(successCall);
  return { latitude, longitude };
};
