import { ComponentStory } from '@storybook/react';
import { Sort as SortIcon } from '../Sort';

export default {
  title: 'Components/Icons/Sort',
  component: SortIcon,
};

const Template: ComponentStory<typeof SortIcon> = (args) => <SortIcon {...args} />;

export const Sort = Template.bind({});
Sort.args = {
};
