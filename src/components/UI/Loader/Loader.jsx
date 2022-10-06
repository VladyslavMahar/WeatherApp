import React from "react";
import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.loader}>
      <div className={cl.box1}></div>
      <div className={cl.box2}></div>
      <div className={cl.box3}></div>
    </div>
  );
};

export default Loader;
