import { ComponentStory } from '@storybook/react';
import { ChevronRight as ChevronRightIcon } from '../ChevronRight';

export default {
  title: 'Components/Icons/ChevronRight',
  component: ChevronRightIcon,
};

const Template:ComponentStory<typeof ChevronRightIcon> = (args) => <ChevronRightIcon {...args} />;

export const ChevronRight = Template.bind({});
ChevronRight.args = {
};
