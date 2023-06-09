import { ComponentStory } from '@storybook/react';
import { RadioEmpty as RadioEmptyIcon } from '../RadioEmpty';

export default {
  title: 'Components/Icons/RadioEmpty',
  component: RadioEmptyIcon,
};

const Template:ComponentStory<typeof RadioEmptyIcon> = (args) => <RadioEmptyIcon {...args} />;

export const RadioEmpty = Template.bind({});
RadioEmpty.args = {
};
