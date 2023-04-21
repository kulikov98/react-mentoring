import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const WithoutInitialValue = Template.bind({});

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  initialCount: "10",
};
