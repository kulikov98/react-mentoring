import React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dialog from "./Dialog";

describe("Dialog", () => {
  const onCloseMock = jest.fn();
  const title = "some title";
  const children = <div data-testid="children">child content</div>;

  beforeEach(() => {
    render(<Dialog title={title} children={children} onClose={onCloseMock} />);
  });

  it("should render title", () => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should render children", () => {
    expect(screen.getByTestId("children")).toBeInTheDocument();
    expect(screen.getByText("child content")).toBeInTheDocument();
  });

  it("should fire callback on close", () => {
    act(() => userEvent.click(screen.getByTestId("close-btn")));
    expect(onCloseMock).toHaveBeenCalled();
  });
});
