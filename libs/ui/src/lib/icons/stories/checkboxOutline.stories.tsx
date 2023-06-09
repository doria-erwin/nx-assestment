import { ComponentStory } from '@storybook/react';
import { CheckboxOutline as CheckboxOutlineIcon } from '../CheckboxOutline';

export default {
  title: 'Components/Icons/CheckboxOutline',
  component: CheckboxOutlineIcon,
};

const Template:ComponentStory<typeof CheckboxOutlineIcon> = (args) => <CheckboxOutlineIcon {...args} />;

export const CheckboxOutline = Template.bind({});
CheckboxOutline.args = {
  color: '#3891A1'
};
