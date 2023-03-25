import React, { useState, useEffect } from "react";
import Card from "./Card";
import alfani from "../images/alfani.jpeg";
import blueSeventy from "../images/blue70s.jpeg";
import flightless from "../images/flightless.jpeg";
import italy from "../images/italy.jpeg";
import kglw from "../images/kglw.jpeg";
import ottawa from "../images/ottawa.jpeg";
import pentaClub from "../images/penta-club.jpeg";
import portugal from "../images/portugal.jpeg";
import waxCanvas from "../images/wax-canvas.jpeg";

export default function CardContainer() {
  let images = [
    { src: alfani, title: "mens brown jacket" },
    { src: blueSeventy, title: "mens blue jacket" },
    { src: flightless, title: "mens label tee" },
    { src: italy, title: "mens italian shirt" },
    { src: kglw, title: "mens band tee" },
    { src: ottawa, title: "mens canada shirt" },
    { src: pentaClub, title: "mens kramer shirt" },
    { src: portugal, title: "mens portugese shirt" },
    { src: waxCanvas, title: "mens wax canvas jacket" },
  ];

  const [cards, setCards] = useState(images);

  useEffect(() => {
    setCards([...cards]);
  });

  return (
    <>
      <div className="card-container">
        {cards.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </>
  );
}
