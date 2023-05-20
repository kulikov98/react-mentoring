import { MovieDetails } from "./MovieDetails";
import movies from "../../testing/movies.json";

export default {
  title: "MovieDetails",
  component: MovieDetails,
};

const Template = (args) => <MovieDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
};
