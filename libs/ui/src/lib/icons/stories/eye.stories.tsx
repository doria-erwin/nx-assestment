import { ComponentStory } from '@storybook/react';
import { Eye as EyeIcon } from '../Eye';

export default {
  title: 'Components/Icons/Eye',
  component: EyeIcon,
};

const Template:ComponentStory<typeof EyeIcon> = (args) => <EyeIcon {...args} />;

export const Eye = Template.bind({});
Eye.args = {
  color: '#3891A1'
};
