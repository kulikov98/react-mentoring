import SortControl from "./SortControl";

export default {
  title: "SortControl",
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  preselected: "title",
  onSelect: console.log,
};
