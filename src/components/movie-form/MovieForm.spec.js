import React from "react";
import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieForm from "./MovieForm";
import movies from "../../testing/movies.json";

describe("MovieForm", () => {
  const onSubmitMock = jest.fn();
  const movie = movies[0];

  beforeEach(() => {
    onSubmitMock.mockClear();
  });

  it("should render empty form fields", () => {
    render(<MovieForm onSubmit={onSubmitMock} />);
    assertInputValues();
  });

  it("should render form fields with default values", () => {
    render(<MovieForm movie={movie} onSubmit={onSubmitMock} />);
    assertInputValues(movie);
  });

  it("should reset form by click on reset", () => {
    render(<MovieForm movie={movie} onSubmit={onSubmitMock} />);
    act(() => {
      userEvent.type(screen.getByLabelText("title"), "some title");
      fireEvent.change(screen.getByLabelText("release date"), {
        target: { value: "1972-03-24" },
      });
      userEvent.type(screen.getByLabelText("url"), "some url");
      userEvent.type(screen.getByLabelText("rating"), "123");
      userEvent.type(screen.getByLabelText("runtime"), "123");
      userEvent.type(screen.getByLabelText("overview"), "some overview");
      userEvent.click(screen.getByText("Reset"));
    });
    assertInputValues(movie);
  });

  it("should fire callback on sumit", () => {
    render(<MovieForm movie={movie} onSubmit={onSubmitMock} />);
    act(() => userEvent.click(screen.getByText("Submit")));
    expect(onSubmitMock).toHaveBeenCalled();
  });
});

function assertInputValues(movie) {
  expect(screen.getByLabelText("title")).toHaveValue(movie?.title ?? "");
  expect(screen.getByLabelText("release date")).toHaveValue(
    movie?.release_date ?? ""
  );
  expect(screen.getByLabelText("url")).toHaveValue(movie?.poster_path ?? "");
  expect(screen.getByLabelText("rating")).toHaveValue(
    movie?.vote_average ?? null
  );
  expect(screen.getByTestId("genre")).toBeInTheDocument();
  expect(screen.getByTestId("selected-options")).toHaveTextContent(
    movie?.genres?.join(", ") ?? "Select genre"
  );
  expect(screen.getByLabelText("runtime")).toHaveValue(movie?.runtime ?? null);
  expect(screen.getByLabelText("overview")).toHaveValue(movie?.overview ?? "");
  expect(screen.getByText("Reset")).toBeInTheDocument();
  expect(screen.getByText("Submit")).toBeInTheDocument();
}
