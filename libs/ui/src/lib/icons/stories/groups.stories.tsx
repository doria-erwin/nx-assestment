import { ComponentStory } from '@storybook/react';
import { Groups as GroupsIcon } from '../Groups';

export default {
  title: 'Components/Icons/Groups',
  component: GroupsIcon,
};

const Template:ComponentStory<typeof GroupsIcon> = (args) => <GroupsIcon {...args} />;

export const Groups = Template.bind({});
Groups.args = {
};
