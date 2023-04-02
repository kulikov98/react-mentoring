import MovieTile from "./MovieTile";
import movies from '../../testing/movies.json';

export default {
  title: "MovieTile",
  component: MovieTile,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "320px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <MovieTile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
  onClick: alert,
};
