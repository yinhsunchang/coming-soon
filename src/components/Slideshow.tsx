import "../ComingSoon.css";
import waiting1920 from "../assets/waiting1920.jpg";
import paw from "../assets/paw.jpg";

export const SLIDES = [
  { id: 1, src: waiting1920 },
  { id: 2, src: paw },
];

export const ANIMATION_INTERVAL = 5;

function Slideshow() {
  return (
    <div>
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{
            backgroundImage: `url(${slide.src})`,
            animationDelay: `${index * ANIMATION_INTERVAL}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Slideshow;
