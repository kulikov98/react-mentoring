import MovieForm from "./MovieForm";
import movies from "../../testing/movies.json";

export default {
  title: "MovieForm",
  component: MovieForm,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1000px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: "form",
      values: [
        {
          name: "form",
          value: "#232323",
        },
      ],
    },
  },
};

const Template = (args) => <MovieForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  movie: movies[0],
  onSubmit: console.log,
};
