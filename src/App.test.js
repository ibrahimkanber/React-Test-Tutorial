import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelwithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  //expect the button text to be "Change to red"
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  //click button
  fireEvent.click(colorButton);

  //expect the button text to be "Change to blue"
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  expect(colorButton).toBeEnabled();

  // check that the cehckbox starts out unchecked

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox functionality", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  expect(button).toBeEnabled();
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelwithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelwithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelwithSpaces("MidnightVioletRed")).toBe("Midnight Violet Red");
  });
});
