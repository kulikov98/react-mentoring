import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  const initQuery = "some text";

  it("should render an input with the value equal to initial value passed in props", () => {
    render(<SearchForm query={initQuery} />);
    expect(screen.getByTestId("search-input")).toHaveValue(initQuery);
  });

  it("should call 'onSearch' with a proper value after typing to the input and click on the submit button", () => {
    const searchFn = jest.fn();
    const text = "text";

    render(<SearchForm query="" onSearch={searchFn} />);
    act(() => {
      userEvent.type(screen.getByTestId("search-input"), text);
      userEvent.click(screen.getByTestId("btn"));
    });

    expect(searchFn).toHaveBeenCalledWith(text);
  });

  it("should call 'onSearch' with a proper value after typing to the input and pressing Enter key", () => {
    const searchFn = jest.fn();
    const text = "text";

    render(<SearchForm query="" onSearch={searchFn} />);
    act(() => {
      userEvent.type(screen.getByTestId("search-input"), text);
      userEvent.keyboard("{Enter}");
    });

    expect(searchFn).toHaveBeenCalledWith(text);
  });
});
