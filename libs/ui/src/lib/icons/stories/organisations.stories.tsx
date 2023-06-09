import { ComponentStory } from '@storybook/react';
import { Organisations as OrganisationsIcon } from '../Organisations';

export default {
  title: 'Components/Icons/Organisations',
  component: OrganisationsIcon,
};

const Template:ComponentStory<typeof OrganisationsIcon> = (args) => <OrganisationsIcon {...args} />;

export const Organisations = Template.bind({});
Organisations.args = {
};
