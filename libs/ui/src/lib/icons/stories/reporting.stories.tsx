import { ComponentStory } from '@storybook/react';
import { Reporting as ReportingIcon } from '../Reporting';

export default {
  title: 'Components/Icons/Reporting',
  component: ReportingIcon,
};

const Template:ComponentStory<typeof ReportingIcon> = (args) => <ReportingIcon {...args} />;

export const Reporting = Template.bind({});
Reporting.args = {
};
