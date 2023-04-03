import React from "react";
import image from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={image} className="nav--logo" />
    </nav>
  );
}
