import React from "react";
import Star from "../images/star.png";

export function Card(props) {
  const { item } = props;
  let badge;
  if (!item.openSpots) badge = "SOLD OUT";
  else if (item.location === "Online") badge = "ONLINE";
  return (
    <div className="card">
      {badge && <div className="card--badge">{badge}</div>}
      <img src={`../static/${item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{item.stats.rating}</span>
        <span className="grey"> ({item.stats.reviewCount}) • </span>
        <span className="grey">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="card--price">
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
}
