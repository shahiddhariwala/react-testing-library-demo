import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import App from "./App";

describe("Testing App Component", () => {
  test("Render `Shahid Dhariwala`", () => {
    // Arrange
    render(<App />);

    // Act [Nothing]
    // Assert
    const title = screen.getByText("Shahid Dhariwala");
    screen.debug(title);
    expect(title).toBeInTheDocument();
  });
});
