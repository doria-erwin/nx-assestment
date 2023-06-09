import { ComponentStory } from '@storybook/react';
import { Close as CloseIcon } from '../Close';

export default {
  title: 'Components/Icons/Close',
  component: CloseIcon,
};

const Template:ComponentStory<typeof CloseIcon> = (args) => <CloseIcon {...args} />;

export const Close = Template.bind({});
Close.args = {
};
