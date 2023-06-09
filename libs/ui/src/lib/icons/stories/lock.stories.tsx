import { ComponentStory } from '@storybook/react';
import { Lock as LockIcon } from '../Lock';

export default {
  title: 'Components/Icons/Lock',
  component: LockIcon,
};

const Template:ComponentStory<typeof LockIcon> = (args) => <LockIcon {...args} />;

export const Lock = Template.bind({});
Lock.args = {
};
