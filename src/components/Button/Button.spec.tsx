import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Component Button", () => {
  it("should render the componet button", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should render component with custom props", () => {
    render(
      <Button size="lg" color="primary">
        Primary
      </Button>
    );

    const button = document.querySelector("button");
    expect(button).toBeInTheDocument();
  });
});
