import { ComponentStory } from '@storybook/react';
import { ChevronUp as ChevronUpIcon } from '../ChevronUp';

export default {
  title: 'Components/Icons/ChevronUp',
  component: ChevronUpIcon,
};

const Template:ComponentStory<typeof ChevronUpIcon> = (args) => <ChevronUpIcon {...args} />;

export const ChevronUp = Template.bind({});
ChevronUp.args = {
};
