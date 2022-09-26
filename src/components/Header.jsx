import React from "react";
import "../styles/header.css";
import "../styles/header.css";
import MyInput from "./UI/MyInput/MyInput";
import { GrLocation } from "react-icons/gr";

const Header = ({ location, setLocation, getWeather, myLoc }) => {
  return (
    <header>
      <MyInput
        value={location}
        placeholder="Enter location"
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={getWeather}
      />
      <GrLocation className="loc" onClick={myLoc} />
    </header>
  );
};

export default Header;
