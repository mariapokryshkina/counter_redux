import React from "react";
import classes from "./Circle.module.css";

import { useSelector } from "react-redux";

const Circle = () => {
  const counter = useSelector((state) => state.counter);
  return <div className={classes.circle}>{counter}</div>;
};

export default Circle;
