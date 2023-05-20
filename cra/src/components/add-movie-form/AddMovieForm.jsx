import { useRouteLoaderData } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movie-form/MovieForm";
import { useNavigate, useRevalidator } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../..";

const AddMovieForm = () => {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const api = useContext(ApiContext);
  const movie = useRouteLoaderData("movieId");
  const isEditMode = movie !== undefined;
  const title = isEditMode ? "Edit movie" : "Add movie";

  const handleSubmit = (movieObj) => {
    const method = isEditMode ? "moviesUpdateById" : "moviesCreate";
    if (isEditMode) {
      movieObj.id = movie.id;
    }

    api[method](movieObj, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      revalidator.revalidate();
      navigate(`/${data.id}`);
    });
  };

  return (
    <Dialog title={title} onClose={() => navigate(-1)}>
      <MovieForm movie={movie} onSubmit={handleSubmit} />
    </Dialog>
  );
};

export default AddMovieForm;
