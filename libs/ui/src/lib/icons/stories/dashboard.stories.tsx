import { ComponentStory } from '@storybook/react';
import { Dashboard as DashboardIcon } from '../Dashboard';

export default {
  title: 'Components/Icons/Dashboard',
  component: DashboardIcon,
};

const Template:ComponentStory<typeof DashboardIcon> = (args) => <DashboardIcon {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {
};
