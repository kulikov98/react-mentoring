import Dialog from "../dialog/Dialog";
import MovieForm from "../movie-form/MovieForm";
import { useLoaderData, useNavigate, useSubmit } from "@remix-run/react";

const AddMovieForm = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  const movie = useLoaderData();
  const title = movie !== undefined ? "Edit movie" : "Add movie";

  return (
    <Dialog title={title} onClose={() => navigate(-1)}>
      <MovieForm
        movie={movie}
        onSubmit={(data) => submit(data, { method: "post" })}
      />
    </Dialog>
  );
};

export default AddMovieForm;
