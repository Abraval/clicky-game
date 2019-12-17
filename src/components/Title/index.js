import React, { Children } from "react";
import "./style.css";

function Title(props) {

  return <div className="titleMain">
  <a href="."><h1 className="title" href="">Click! Oink! Click! Oink!</h1></a>
  <h4 className="rules">Click on image to earn points! But only once!</h4>
  <div className="scores">Scores =  {props.score}</div>
  </div>;
}

export default Title;
