import type { LoaderArgs } from "@remix-run/server-runtime";
import MovieDetails from "~/components/movie-details/MovieDetails";
import MovieApi from "~/open-api/api/MovieApi";

export const loader = async ({ params }: LoaderArgs) => {
  const api = new MovieApi();

  const request = new Promise((res, rej) => {
    api.moviesGetById(params.movieId as string, (err: any, data: any) => {
      if (err) rej(err);
      res(data);
    });
  });

  try {
    return await request;
  } catch (e) {
    throw new Response("Not Found", { status: 404 });
  }
};

export default MovieDetails;
