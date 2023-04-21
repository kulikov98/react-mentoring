import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button label="action" {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  size: "medium",
};
