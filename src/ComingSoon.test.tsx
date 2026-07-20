import { render, screen } from "@testing-library/react";
import ComingSoon from "./ComingSoon";

vi.mock("./components/Slideshow.tsx", () => ({
  default: () => <div data-testid="slideshow" />,
}));

vi.mock("./components/Typing.tsx", () => ({
  default: () => <div data-testid="typing" />,
}));

vi.mock("./components/Countdown.tsx", () => ({
  default: () => <div data-testid="countdown" />,
}));

vi.mock("./components/Subscribe.tsx", () => ({
  default: () => <div data-testid="subscribe" />,
}));

test("renders coming soon page", () => {
  render(<ComingSoon />);

  expect(screen.getByText("COMING SOON")).toBeInTheDocument();

  expect(screen.getByTestId("slideshow")).toBeInTheDocument();

  expect(screen.getByTestId("typing")).toBeInTheDocument();

  expect(screen.getByTestId("countdown")).toBeInTheDocument();

  expect(screen.getByTestId("subscribe")).toBeInTheDocument();
});

test("renders author link", () => {
  render(<ComingSoon />);

  const link = screen.getByRole("link", {
    name: "Yin-Hsun Chang",
  });

  expect(link).toHaveAttribute("href", "https://github.com/yinhsunchang");

  expect(link).toHaveAttribute("target", "_blank");
});
