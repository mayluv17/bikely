import { render, screen } from "@testing-library/react";
import App from "./station";

test("renders stations with prop stationId", () => {
  render(<Station stationId />);
});
