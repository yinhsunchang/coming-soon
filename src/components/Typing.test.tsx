import { render, screen } from "@testing-library/react";
import Typing from "./Typing";

test("renders first message of typing effect", async () => {
  render(<Typing />);
  expect(await screen.findByText("My")).toBeInTheDocument();
});
