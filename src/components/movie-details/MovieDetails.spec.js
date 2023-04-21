import { screen, render } from "@testing-library/react";
import MovieDetails from "./MovieDetails";
import movies from "../../testing/movies.json";

describe("MovieDetails", () => {
  const movie = movies[0];

  beforeEach(() => {
    render(<MovieDetails movie={movie} />);
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

  it("should show rating", () => {
    expect(screen.getByTestId("rating")).toHaveTextContent(movie.vote_average);
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

  it("should show duration", () => {
    const expected = `${Math.round(movie.runtime / 60)}h ${
      movie.runtime % 60
    }min`;
    expect(screen.getByTestId("duration")).toHaveTextContent(expected);
  });

  it("should show description", () => {
    expect(screen.getByTestId("description")).toHaveTextContent(movie.overview);
  });
});
