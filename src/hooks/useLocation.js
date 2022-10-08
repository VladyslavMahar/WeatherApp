import { useState } from "react";

export const useLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const successCall = (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);
  };

  navigator.geolocation.getCurrentPosition(successCall);
  return { latitude, longitude };
};
