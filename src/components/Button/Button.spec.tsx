import { jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Component Button", () => {
  it("should render the componet button", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should call onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
