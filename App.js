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
        key={cardData.id}
        item={cardData}
        // image={`../static/${cardData.coverImg}`}
        // rating={cardData.stats.rating}
        // reviewCount={cardData.stats.reviewCount}
        // location={cardData.location}
        // title={cardData.title}
        // price={cardData.price}
        // openSpots={cardData.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
