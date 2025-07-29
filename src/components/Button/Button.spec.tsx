import { jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Component Button", () => {
  it("should render the componet button", () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-gradient-to-r from-purple-700 to-purple-950 hover:bg-gradient-to-l hover:from-purple-700 hover:to-purple-950"
    );
  });

  it("should render component with custom props", () => {
    render(
      <Button color="secondary" size="lg" fontSize="text-lg">
        Secondary
      </Button>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-secondary hover:shadow-pink-800");
  });

  it("should call onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
