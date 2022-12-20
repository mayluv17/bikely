import { render, screen } from "@testing-library/react";
import App from "./viewstation";

test("renders learn react link", () => {
  render(<Viewstation />);
  const linkElement = screen.getByText(/name/i);
  expect(linkElement).toBeInTheDocument();
});
