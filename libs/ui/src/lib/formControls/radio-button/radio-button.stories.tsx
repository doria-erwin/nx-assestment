import { ComponentStory } from '@storybook/react';
import { RadioButton as RadioButtonIcon } from './radio-button';

export default {
  title: 'Components/FormControls/RadioButton',
  component: RadioButtonIcon,
};

const Template: ComponentStory<typeof RadioButtonIcon> = (args) => <RadioButtonIcon {...args} />;

export const RadioButton = Template.bind({});
RadioButton.args = {
};
