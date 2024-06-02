"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Slide from "./Slide";
function HeroSlider({ slides }) {
  const timerRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderNavStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    padding: "1rem",
  };

  const sliderBulletStyles = (slideIndex, currentIndex) => {
    let bgColor, roundedBorder;
    if (slideIndex === currentIndex) {
      roundedBorder = "2px solid white";
      bgColor = "#312e81";
    } else {
      roundedBorder = "none";
      bgColor = "#eee";
    }
    return {
      border: roundedBorder,
      borderRadius: "50%",
      backgroundColor: bgColor,
      width: "10px",
      height: "10px",
      cursor: "pointer",
    };
  };

  const goToNextSlide = useCallback(() => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNextSlide();
    }, 3500);

    return () => clearTimeout(timerRef.current);
  }, [goToNextSlide]);

  return (
    <section className="bg-indigo-600 text-white body-font">
      <Slide
        heading={slides[currentIndex].heading}
        content={slides[currentIndex].content}
        image={slides[currentIndex].image}
      />
      <div style={sliderNavStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={sliderBulletStyles(slideIndex, currentIndex)}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
