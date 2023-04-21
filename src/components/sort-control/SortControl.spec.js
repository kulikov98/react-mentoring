import { userEvent } from "@storybook/testing-library";
import { screen, act, render } from "@testing-library/react";
import SortControl from "./SortControl";

describe("SortControl", () => {
  it("should render preselected option", () => {
    render(<SortControl preselected="title" />);
    expect(screen.getByTestId("selected")).toHaveTextContent("Title");
  });

  it("should not show options by default", () => {
    render(<SortControl preselected="title" />);
    expect(screen.getByTestId("options")).not.toHaveClass("options--open");
  });

  it("should show options on click", () => {
    render(<SortControl preselected="title" />);
    act(() => userEvent.click(screen.getByTestId("selected")));
    expect(screen.getByTestId("options")).toHaveClass("options--open");
  });

  it("should select option on click", () => {
    render(<SortControl preselected="title" onSelect={() => null} />);
    act(() => {
      userEvent.click(screen.getByTestId("selected"));
      userEvent.click(screen.getByText("Release Date"));
    });
    expect(screen.getByTestId("selected")).toHaveTextContent("Release Date");
  });

  it("should hide options on select", () => {
    render(<SortControl preselected="title" onSelect={() => null} />);
    act(() => {
      userEvent.click(screen.getByTestId("selected"));
      userEvent.click(screen.getByText("Release Date"));
    });
    expect(screen.getByTestId("options")).not.toHaveClass("options--open");
  });

  it("should call passed callback on option select", () => {
    const cb = jest.fn();
    render(<SortControl preselected="title" onSelect={cb} />);
    act(() => {
      userEvent.click(screen.getByTestId("selected"));
      userEvent.click(screen.getByText("Release Date"));
    });
    expect(cb).toHaveBeenCalledWith("release_date");
  });
});
