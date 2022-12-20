import { render, screen } from "@testing-library/react";
import App from "./stations";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/view/i);
  expect(linkElement).toBeInTheDocument();
});
