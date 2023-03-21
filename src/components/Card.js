import React from "react";

export default function Card(props) {
  const {
    card: { src, title },
  } = props;

  return (
    <div className="card">
      <figure>
        <img src={src} alt={title} />
      </figure>
      <figcaption>
        <span>{title}</span>
      </figcaption>
    </div>
  );
}
