import { describe, expect, test, vi } from "vitest";
import DynamicList from "./DynamicList";
import { render, screen } from "@testing-library/react";

describe("Testing Dynamic User List", () => {
  test("Test if 'User List' component is mounted", () => {
    // Arrange
    render(<DynamicList />);

    // Act

    // Assert
    const userListTitle = screen.getByText("User List");
    expect(userListTitle).toBeInTheDocument();
  });

  test("Test if 'User List' component is displays the lists", async () => {
    // Arrange
    render(<DynamicList />);

    // Act

    // Assert
    const userLists = await screen.findAllByRole("listitem");
    expect(userLists).not.toHaveLength(0);
    // Actual length is 30
  });

  test("Test if 'User List' component is displays the lists via Mock API test", async () => {
    // Arrange

    window.fetch = vi.fn().mockImplementationOnce(async () => {
      return {
        json: async () => {
          return [{ firstname: "Shahid" }];
        },
      };
    });
    render(<DynamicList />);

    // Act

    // Assert
    const userLists = await screen.findAllByRole("listitem");
    screen.debug(userLists);
    expect(userLists).not.toHaveLength(0);
    // Actual length is 30
  });
});
