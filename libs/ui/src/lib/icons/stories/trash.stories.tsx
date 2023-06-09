import { ComponentStory } from '@storybook/react';
import { Trash as TrashIcon } from '../Trash';

export default {
  title: 'Components/Icons/Trash',
  component: TrashIcon,
};

const Template:ComponentStory<typeof TrashIcon> = (args) => <TrashIcon {...args} />;

export const Trash = Template.bind({});
Trash.args = {
};
