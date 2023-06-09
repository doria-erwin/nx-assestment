import { ComponentStory } from '@storybook/react';
import { Warning as WarningIcon } from '../Warning';

export default {
  title: 'Components/Icons/Warning',
  component: WarningIcon,
};

const Template:ComponentStory<typeof WarningIcon> = (args) => <WarningIcon {...args} />;

export const Warning = Template.bind({});
Warning.args = {
};
