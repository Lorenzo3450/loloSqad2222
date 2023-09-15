import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const images = [
    require('./inicial.png'),
    require('./Infantil.png'),
    require('./doces.png'),
    require('./frete.png'),
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="slider">
      <img src={images[currentImage]} alt={`Imagem ${currentImage + 1}`} />
      <div className="dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
