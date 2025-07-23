import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function CarouselCustom({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  let isSwiped = false;

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    }, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    if (e.target.closest("button")) isSwiped = false;
    else isSwiped = true;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwiped) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  return (
    <div
      className="relative overflow-hidden w-full bg-neutral-900 pb-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform ease-out duration-500 p-4"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {Array.isArray(slides)
          ? slides.map((child, index) => (
              <div key={index} className="w-full flex-shrink-0 mr-8">
                {child}
              </div>
            ))
          : null}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-6">
        <button
          onClick={() => prev()}
          aria-label="Previous Slide"
          className="p-1 rounded-full shadow bg-gray-600 text-white/80 hover:bg-gray-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => next()}
          aria-label="Next Slide"
          className="p-1 rounded-full shadow bg-gray-600 text-white/80 hover:bg-gray-500 hover:text-white"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-1">
          {slides.map((_, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => setCurr(i)}
              onKeyDown={(e) => e.key === "Enter" && setCurr(i)}
              className={`cursor-pointer transition-all rounded-xs ${
                curr === i ? "w-8 bg-white h-[4px]" : "w-4 bg-gray-400 h-[3px]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
