import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenreSelect from "./GenreSelect";

describe("GenreSelect", () => {
  const genres = [
    { name: "documentary", id: "1" },
    { name: "history", id: "2" },
    { name: "comedy", id: "3" },
    { name: "horror", id: "4" },
    { name: "crime", id: "5" },
  ];

  it("should render all genres passed in props", () => {
    render(<GenreSelect genres={genres} />);
    expect(screen.getByTestId("genres").children).toHaveLength(genres.length);
  });

  it("should highlight a selected genre passed in props", () => {
    const { name: selectedName } = genres[0];
    render(<GenreSelect genres={genres} selected={selectedName} />);
    expect(screen.getByLabelText(selectedName)).toHaveAttribute("checked");
  });

  it('should call the "onSelect" callback and pass the correct genre in arguments after clicking on a genre element', () => {
    const { name } = genres[0];
    const cb = jest.fn();
    render(<GenreSelect genres={genres} onSelect={cb} />);
    act(() => userEvent.click(screen.getByLabelText(name)));
    expect(cb).toHaveBeenCalledWith(name);
  });
});
