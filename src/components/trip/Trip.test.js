import { render, screen } from "@testing-library/react";
import Trips from "./Trip";

test("renders trips components with view link", () => {
  render(<Trips />);
  const linkElement = screen.getByText(/view/i);
  expect(linkElement).toBeInTheDocument();
});
