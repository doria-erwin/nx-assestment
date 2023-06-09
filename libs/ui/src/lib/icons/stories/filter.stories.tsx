import { ComponentStory } from '@storybook/react';
import { Filter as FilterIcon } from '../Filter';

export default {
  title: 'Components/Icons/Filter',
  component: FilterIcon,
};

const Template:ComponentStory<typeof FilterIcon> = (args) => <FilterIcon {...args} />;

export const Filter = Template.bind({});
Filter.args = {
  color: '#3891A1'
};
