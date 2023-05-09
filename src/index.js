import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MovieApi from "./open-api/api/MovieApi";

import MovieListPage from "./components/movie-list-page/MovieListPage";
import MovieSearchForm from "./components/movie-search-form/MovieSearchForm";
import MovieDetails from "./components/movie-details/MovieDetails";
import AddMovieForm from "./components/add-movie-form/AddMovieForm";
import "./index.css";

const movieApi = new MovieApi();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MovieListPage />,
    children: [
      {
        path: "/",
        element: <MovieSearchForm />,
        children: [
          {
            path: "/new",
            element: <AddMovieForm />,
          },
        ],
      },
      {
        id: "movieId",
        path: "/:movieId",
        element: <MovieDetails />,
        loader: async ({ params }) =>
          new Promise((res, rej) => {
            movieApi.moviesGetById(params.movieId, (err, data) => {
              if (err) rej(err);
              res(data);
            });
          }),
        children: [
          {
            path: "/:movieId/edit",
            element: <AddMovieForm />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
export const ApiContext = createContext();
root.render(
  <React.StrictMode>
    <ApiContext.Provider value={movieApi}>
      <RouterProvider router={router} />
    </ApiContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
