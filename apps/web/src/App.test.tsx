import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders hello world", () => {
  it("should display hello world text", () => {
    render(<App />);
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
