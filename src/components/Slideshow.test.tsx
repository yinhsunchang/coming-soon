import { render } from "@testing-library/react";
import Slideshow from "./Slideshow";
import { SLIDES, ANIMATION_INTERVAL } from "./slideshowConfig";

const setup = () => {
  const { container } = render(<Slideshow />);
  return container.querySelectorAll<HTMLElement>(".slide");
};

describe("Slideshow", () => {
  it("renders all slides", () => {
    const slides = setup();
    expect(slides).toHaveLength(SLIDES.length);
  });

  it("sets correct background images", () => {
    const slides = setup();
    expect(slides[0].style.backgroundImage).toContain("waiting1920.jpg");
    expect(slides[1].style.backgroundImage).toContain("paw.jpg");
  });

  it("sets correct animation delay", () => {
    const slides = setup();
    slides.forEach((slide, index) => {
      expect(slide).toHaveStyle({
        animationDelay: `${index * ANIMATION_INTERVAL}s`,
      });
    });
  });
});
