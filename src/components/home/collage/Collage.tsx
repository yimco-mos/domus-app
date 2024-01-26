"use client";
import React, { useEffect, useState } from "react";

export const Collage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "IMG-20240124-WA0013.jpg",
    "IMG-20240124-WA0070.jpg",
    "IMG-20240124-WA0068.jpg",
    "santarosa.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleImageLoad = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
  };

  return (
    <div className="collage">
      <div className="collage-images">
        {images.map((image, index) => (
          <img
            key={index}
            className={`images ${index === currentIndex ? "active" : ""}`}
            src={`/proyecto/${image}`}
            alt=""
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </div>
  );
};
