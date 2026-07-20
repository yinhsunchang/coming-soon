import { render, screen } from "@testing-library/react";
import Countdown from "./Countdown";

test("renders countdown timer with days, hours, minutes, seconds", () => {
  render(<Countdown />);
  expect(screen.getByText(/days/i)).toBeInTheDocument();
  expect(screen.getByText(/hours/i)).toBeInTheDocument();
  expect(screen.getByText(/minutes/i)).toBeInTheDocument();
  expect(screen.getByText(/seconds/i)).toBeInTheDocument();
});
