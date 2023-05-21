import SearchForm from "./SearchForm";

export default {
  title: "SearchForm",
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onSearch: (term) => alert(`search for ${term}`),
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  query: "some value",
  onSearch: (term) => alert(`search for ${term}`),
};
