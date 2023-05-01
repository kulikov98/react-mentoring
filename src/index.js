import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MovieApi from "./open-api/api/MovieApi";

import MovieListPage from "./components/movie-list-page/MovieListPage";
import MovieSearchForm from "./components/movie-search-form/MovieSearchForm";
import MovieDetails from "./components/movie-details/MovieDetails";
import "./index.css";

const movieApi = new MovieApi();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage api={movieApi} />,
    children: [
      {
        path: "/",
        element: <MovieSearchForm />,
      },
      {
        path: "/:movieId",
        element: <MovieDetails />,
        loader: async ({ params }) => new Promise((res, rej) => {
          movieApi.moviesGetById(params.movieId, (err, data) => {
            if (err) rej(err);
            res(data);
          })
        }),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
