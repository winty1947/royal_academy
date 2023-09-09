import { useState, useEffect } from "react";
import {inaltime} from './pages/Acasa';
import Fade from 'react-reveal/Fade';

let inaltimeSlider = 700;
if (window.innerWidth <= 960) {
  inaltimeSlider = 400;
}

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#00387B",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#00387B",
  zIndex: 1,
  cursor: "pointer",
  
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "40px",
  color: "#00387B",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    // Folosește un interval pentru a actualiza slide-ul la fiecare 5 secunde
    const interval = setInterval(goToNext, 5000); // Intervalul este de 5 secunde

    // Cleanup pentru a opri intervalul când componenta este demontată
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Fade bottom duration={1000}>
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {slideIndex === currentIndex ? "● " : "○ "}
          </div>
        ))}
      </div>
    </div>
    </Fade>
  );
};

export default ImageSlider;
