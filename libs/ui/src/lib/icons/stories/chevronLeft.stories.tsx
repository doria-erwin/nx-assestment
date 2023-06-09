import { ComponentStory } from '@storybook/react';
import { ChevronLeft as ChevronLeftIcon } from '../ChevronLeft';

export default {
  title: 'Components/Icons/ChevronLeft',
  component: ChevronLeftIcon,
};

const Template:ComponentStory<typeof ChevronLeftIcon> = (args) => <ChevronLeftIcon {...args} />;

export const ChevronLeft = Template.bind({});
ChevronLeft.args = {
};
