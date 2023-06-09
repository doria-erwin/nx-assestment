import { ComponentStory } from '@storybook/react';
import { RadioFilled as RadioFilledIcon } from '../RadioFilled';

export default {
  title: 'Components/Icons/RadioFilled',
  component: RadioFilledIcon,
};

const Template:ComponentStory<typeof RadioFilledIcon> = (args) => <RadioFilledIcon {...args} />;

export const RadioFilled = Template.bind({});
RadioFilled.args = {
};
