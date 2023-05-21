import type { ActionArgs, LoaderArgs } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";
import AddMovieForm from "~/components/add-movie-form/AddMovieForm";
import MovieApi from "~/open-api/api/MovieApi";
import { createMovieObj } from "~/util/helpers";

const api = new MovieApi();

export const loader = async ({ params }: LoaderArgs) => {
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

export const action = async ({ request, params }: ActionArgs) => {
  const formData = await request.formData();
  // TODO: add validation
  const movieObj: any = createMovieObj(formData);

  const updateMovie = new Promise((res, rej) => {
    api.moviesUpdateById(JSON.stringify(movieObj), (err: any, data: any) => {
      if (err) rej(err);
      res(data);
    });
  });

  try {
    await updateMovie;
    return redirect(`/movies/${params.movieId}`);
  } catch (e) {
    throw new Response("Something went wrong", { status: 500 });
  }
};

export default AddMovieForm;
