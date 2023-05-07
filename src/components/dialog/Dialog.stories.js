import { useState } from "react";
import Dialog from "./Dialog";
import MovieForm from "../movie-form/MovieForm";
import movies from "../../testing/movies.json";
import Button from "../button/Button";

const DialogWrapper = (props) => {
  const [isOpen, setOpen] = useState(false);
  return isOpen ? (
    <Dialog {...props} onClose={() => setOpen(false)} />
  ) : (
    <button onClick={() => setOpen(true)}>OPEN</button>
  );
};

export default {
  title: "Dialog",
  component: DialogWrapper,
};

const Template = (args) => <DialogWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Dialog title",
  children: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  ),
};

export const AddMovie = Template.bind({});
AddMovie.args = {
  title: "Add movie",
  children: <MovieForm onSubmit={console.log} />,
};

export const EditMovie = Template.bind({});
EditMovie.args = {
  title: "Edit movie",
  children: <MovieForm movie={movies[0]} onSubmit={console.log} />,
};

export const DeleteMovie = Template.bind({});
DeleteMovie.args = {
  title: "Delete movie",
  children: (
    <>
      <div>Are you sure you want to delete this movie?</div>
      <Button label="confirm" onClick={console.log} style={{ display: 'block', margin: '50px 0 70px auto' }} />
    </>
  ),
};
