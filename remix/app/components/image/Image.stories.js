import Image from "./Image";
import movies from "../../testing/movies.json";

export default {
  title: "Image",
  component: Image,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Image {...args} />;

export const Successful = Template.bind({});
Successful.args = {
  src: movies[0].poster_path,
  alt: "some alt text",
};

export const Failed = Template.bind({});
Failed.args = {
  src: "http://",
  alt: "some alt text",
};
