import GenreSelect from "./GenreSelect";

export default {
  title: "GenreSelect",
  component: GenreSelect,
};

const genres = [
  { name: "documentary", id: "1" },
  { name: "history", id: "2" },
  { name: "comedy", id: "3" },
  { name: "horror", id: "4" },
  { name: "crime", id: "5" },
];

const Template = (args) => <GenreSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  genres,
  onSelect: (name) => alert(`you selected: ${name}`),
};

export const WithSelected = Template.bind({});
WithSelected.args = {
  genres,
  selected: genres[0].name,
  onSelect: (name) => alert(`you selected: ${name}`),
};
