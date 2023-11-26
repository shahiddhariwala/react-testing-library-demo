import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter test suite", () => {
  test("render count as 0 on initial load", () => {
    // Arrange
    render(<Counter />);

    //Act

    // Assert

    const countText = screen.getByText("0");
    expect(countText).toBeInTheDocument();
  });

  test("render count as 1 on click of button", async () => {
    // Arrange
    render(<Counter />);

    // Act
    const addBtn = screen.getByTestId("increment-btn");
    await userEvent.click(addBtn);
    screen.debug(addBtn);

    // Assert
    const countText = screen.getByText("1");
    expect(countText).toBeInTheDocument();
  });

  test("render count as 0 on click of reset after using increments", async () => {
    // Arrange
    render(<Counter />);

    // Act
    const addBtn = screen.getByTestId("increment-btn");
    await userEvent.click(addBtn);
    await userEvent.click(addBtn);
    await userEvent.click(addBtn);
    await userEvent.click(addBtn);
    screen.debug(addBtn);
    const rsetBtn = screen.getByTestId("reset-btn");
    await userEvent.click(rsetBtn);

    // Assert
    const countText = screen.getByText("0");
    expect(countText).toBeInTheDocument();
  });
});
