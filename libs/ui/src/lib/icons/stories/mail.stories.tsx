import { ComponentStory } from '@storybook/react';
import { Mail as MailIcon } from '../Mail';

export default {
  title: 'Components/Icons/Mail',
  component: MailIcon,
};

const Template:ComponentStory<typeof MailIcon> = (args) => <MailIcon {...args} />;

export const Mail = Template.bind({});
Mail.args = {
};
