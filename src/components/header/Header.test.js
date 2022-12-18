import { render, screen } from "@testing-library/react";
import App from "./Header";

test("Header rendered with the menu", () => {
  render(<Header />);
  const linkElement = screen.getByText(/trip/i);
  expect(linkElement).toBeInTheDocument();
});
