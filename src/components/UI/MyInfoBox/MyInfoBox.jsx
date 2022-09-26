import React from "react";
import cl from "./MyInfoBox.module.css";

const MyInfoBox = ({ name, info, unit }) => {
  return (
    <div className={cl.infoBox}>
      <p>{name}</p>
      <span>
        {info}
        {unit}
      </span>
    </div>
  );
};

export default MyInfoBox;
