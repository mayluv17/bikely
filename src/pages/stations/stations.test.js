import { render, screen } from "@testing-library/react";
import App from "./station";

test("renders learn react link", () => {
  render(<Station />);
  const linkElement = screen.getByText(/view/i);
  expect(linkElement).toBeInTheDocument();
});
