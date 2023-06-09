import { ComponentStory } from '@storybook/react';
import { Home as HomeIcon } from '../Home';

export default {
  title: 'Components/Icons/Home',
  component: HomeIcon,
};

const Template:ComponentStory<typeof HomeIcon> = (args) => <HomeIcon {...args} />;

export const Home = Template.bind({});
Home.args = {
};
