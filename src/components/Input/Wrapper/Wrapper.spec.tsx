import { render } from "@testing-library/react";
import { Wrapper } from "./Wrapper";

describe("Component Wrapper", () => {
  it("should render the wrapper with correct styles", () => {
    const { container } = render(
      <Wrapper>
        <div>Test Chindren</div>
      </Wrapper>
    );
    const wrapperElement = container.firstChild;
    expect(wrapperElement).toBeInTheDocument();
    expect(wrapperElement).toHaveClass(
      "flex w-full items-center gap-1 border-[#3F204C] border-b px-2"
    );
  });
});
