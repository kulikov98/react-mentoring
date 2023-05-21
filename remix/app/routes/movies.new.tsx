import type { ActionArgs } from "@remix-run/server-runtime";
import { redirect } from "@remix-run/server-runtime";
import AddMovieForm from "~/components/add-movie-form/AddMovieForm";
import MovieApi from "~/open-api/api/MovieApi";
import { createMovieObj } from "~/util/helpers";

const api = new MovieApi();

export const action = async ({ request, params }: ActionArgs) => {
  const formData = await request.formData();
  // TODO: add validation
  const movieObj: any = createMovieObj(formData);
  delete movieObj.id;

  const createMovie = new Promise((res, rej) => {
    api.moviesCreate(JSON.stringify(movieObj), (err: any, data: any) => {
      if (err) rej(err);
      res(data);
    });
  });

  try {
    const movie: any = await createMovie;
    return redirect(`/movies/${movie.id}`);
  } catch (e) {
    throw new Response("Something went wrong", { status: 500 });
  }
};

export default AddMovieForm;
