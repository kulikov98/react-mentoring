import { screen, render } from "@testing-library/react";
import MovieTile from "./MovieTile";
import movies from "../../testing/movies.json";

describe("MovieTile", () => {
  const movie = movies[0];

  beforeEach(() => {
    render(<MovieTile movie={movie} />);
  });

  it("should show poster", () => {
    expect(screen.getByTestId("poster")).toHaveAttribute(
      "src",
      movie.poster_path
    );
  });

  it("should show title", () => {
    expect(screen.getByTestId("title")).toHaveTextContent(movie.title);
  });

  it("should show genres", () => {
    expect(screen.getByTestId("genres")).toHaveTextContent(
      movie.genres.join(", ")
    );
  });

  it("should show release date", () => {
    const expected = movie.release_date.split("-")[0];
    expect(screen.getByTestId("release-date")).toHaveTextContent(expected);
  });
});
