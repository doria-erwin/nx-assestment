import { ComponentStory } from '@storybook/react';
import { Success as SuccessIcon } from '../Success';

export default {
  title: 'Components/Icons/Success',
  component: SuccessIcon,
};

const Template:ComponentStory<typeof SuccessIcon> = (args) => <SuccessIcon {...args} />;

export const Success = Template.bind({});
Success.args = {
};
