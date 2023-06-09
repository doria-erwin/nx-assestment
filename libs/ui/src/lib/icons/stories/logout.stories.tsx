import { ComponentStory } from '@storybook/react';
import { Logout as LogoutIcon } from '../Logout';

export default {
  title: 'Components/Icons/Logout',
  component: LogoutIcon,
};

const Template:ComponentStory<typeof LogoutIcon> = (args) => <LogoutIcon {...args} />;

export const Logout = Template.bind({});
Logout.args = {
};
