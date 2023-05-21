import type { LoaderArgs } from '@remix-run/server-runtime';
import MovieListPage, { genres, defaultParams } from '~/components/movie-list-page/MovieListPage';
import MovieApi from "~/open-api/api/MovieApi";

export const loader = async ({ request }: LoaderArgs) => {
    const url = new URL(request.url);
    const api = new MovieApi();
  
    const config = {
      search: url.searchParams.get("search"),
      searchBy: url.searchParams.get("searchBy") ?? defaultParams.searchBy,
      sortBy: url.searchParams.get("sortBy") ?? defaultParams.sortBy,
      sortOrder: url.searchParams.get("sortOrder") ?? defaultParams.sortOrder,
      filter: [url.searchParams.get("genre") ?? genres[0].name],
    };
  
    return new Promise((res, rej) => {
      api.moviesGet(config, (err: any, data: any) => {
          if (err) {
            rej(err);
          }
          res(data.data);
        });
    });
  };

export default MovieListPage;
