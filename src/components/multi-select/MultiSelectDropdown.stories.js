import React, { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const options = [
  { value: "crime", label: "crime" },
  { value: "documentary", label: "documentary" },
  { value: "horror", label: "horror" },
  { value: "comedy", label: "comedy" },
];

export default {
  title: "MultiSelectDropdown",
  component: MultiSelectDropdown,
  parameters: {
    backgrounds: {
      default: "form",
      values: [
        {
          name: "form",
          value: "#555",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = ({ selected }) => {
  const [selectedOptions, setSelectedOptions] = useState(selected ?? []);

  const handleSelectChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <MultiSelectDropdown
      options={options}
      selectedOptions={selectedOptions}
      placeholder="Select genre"
      onChange={handleSelectChange}
    />
  );
};

export const Default = Template.bind({});

export const WithSelected = Template.bind({});
WithSelected.args = {
  selected: [options[0].value, options[1].value],
};
