import { ComponentStory } from '@storybook/react';
import { Selector as SelectorIcon } from '../Selector';

export default {
  title: 'Components/Icons/Selector',
  component: SelectorIcon,
};

const Template:ComponentStory<typeof SelectorIcon> = (args) => <SelectorIcon {...args} />;

export const Selector = Template.bind({});
Selector.args = {
};
