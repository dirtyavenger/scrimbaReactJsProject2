import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Card } from "./components/Card";

import data from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
  const cards = data.map((cardData) => {
    return (
      <Card
        image={`../static/${cardData.coverImg}`}
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        country={cardData.location}
        title={cardData.title}
        price={cardData.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {cards}
    </div>
  );
}
