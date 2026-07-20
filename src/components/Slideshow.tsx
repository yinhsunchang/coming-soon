import "../ComingSoon.css";
import { SLIDES, ANIMATION_INTERVAL } from "./slideshowConfig";

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
