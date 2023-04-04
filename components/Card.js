import React from "react";
import Star from "../images/star.png";

export function Card(props) {
  return (
    <div className="card">
      <img src={props.image} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{props.rating}</span>
        <span className="grey"> ({props.reviewCount}) • </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
