import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import App from "./App";

describe("Testing App Component", () => {
  test("Title getting displayed", () => {
    render(<App />);

    const title = screen.getByText("Shahid Dhariwala");
    screen.debug(title);
    expect(title).toBeInTheDocument();
  });
});
