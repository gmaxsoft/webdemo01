"use client"

import { useState } from "react";
import { items } from "@/public/json/Items.json";
import { Carousel } from "react-bootstrap";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} className="item" interval={4000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className="caption">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}