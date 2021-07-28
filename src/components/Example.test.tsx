import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Example } from "@/components";

test("counter increments and decrements when the buttons are clicked", () => {
  render(<Example />);
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent("0");
  fireEvent.click(button);
  expect(button).toHaveTextContent("1");
});
