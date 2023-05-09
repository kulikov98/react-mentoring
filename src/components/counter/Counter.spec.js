import Counter from "./Counter";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  const initialValue = 5;

  beforeEach(() => {
    render(<Counter initialCount={initialValue} />);
  });

  it("should render the initial value provided in props", () => {
    expect(screen.getByText(initialValue)).toHaveTextContent(initialValue);
  });

  it('should decrement the displayed value after clicking on the "decrement" button', async () => {
    act(() => userEvent.click(screen.getByText("-")));
    expect(screen.getByTestId("value")).toHaveTextContent(initialValue - 1);
  });

  it('should increment the displayed value after clicking on the "increment" button', async () => {
    act(() => userEvent.click(screen.getByText("+")));
    expect(screen.getByTestId("value")).toHaveTextContent(initialValue + 1);
  });
});
