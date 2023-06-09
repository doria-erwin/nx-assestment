import { ComponentStory } from '@storybook/react';
import { Users as UsersIcon } from '../Users';

export default {
  title: 'Components/Icons/Users',
  component: UsersIcon,
};

const Template:ComponentStory<typeof UsersIcon> = (args) => <UsersIcon {...args} />;

export const Users = Template.bind({});
Users.args = {
};
