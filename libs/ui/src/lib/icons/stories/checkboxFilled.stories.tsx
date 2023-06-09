import { ComponentStory } from '@storybook/react';
import { CheckboxFilled as CheckboxFilledIcon } from '../CheckboxFilled';

export default {
  title: 'Components/Icons/CheckboxFilled',
  component: CheckboxFilledIcon,
};

const Template:ComponentStory<typeof CheckboxFilledIcon> = (args) => <CheckboxFilledIcon {...args} />;

export const CheckboxFilled = Template.bind({});
CheckboxFilled.args = {
  color: '#3891A1'
};

