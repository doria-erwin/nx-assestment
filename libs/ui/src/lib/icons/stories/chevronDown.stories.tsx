import { ComponentStory } from '@storybook/react';
import { ChevronDown as ChevronDownIcon } from '../ChevronDown';

export default {
  title: 'Components/Icons/ChevronDown',
  component: ChevronDownIcon,
};

const Template:ComponentStory<typeof ChevronDownIcon> = (args) => <ChevronDownIcon {...args} />;

export const ChevronDown = Template.bind({});
ChevronDown.args = {
};
