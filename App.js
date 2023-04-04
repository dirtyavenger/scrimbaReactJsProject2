import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Card } from "./components/Card";
import Photo from "./images/katie-zaferes.png";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  console.log(Photo);
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        image={Photo}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
