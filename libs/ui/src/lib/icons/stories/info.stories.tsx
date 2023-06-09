import { ComponentStory } from '@storybook/react';
import { Info as InfoIcon } from '../Info';

export default {
  title: 'Components/Icons/Info',
  component: InfoIcon,
};

const Template:ComponentStory<typeof InfoIcon> = (args) => <InfoIcon {...args} />;

export const Info = Template.bind({});
Info.args = {
};
