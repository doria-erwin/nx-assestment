import { ComponentStory } from '@storybook/react';
import { Search as SearchIcon } from '../Search';

export default {
  title: 'Components/Icons/Search',
  component: SearchIcon,
};

const Template:ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />;

export const Search = Template.bind({});
Search.args = {
};
