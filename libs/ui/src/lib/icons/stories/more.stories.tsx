import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { More as MoreIcon } from '../More';

const Story: ComponentMeta<typeof MoreIcon> = {
  component: MoreIcon,
  title: 'Components/Icons/More',
};
export default Story;

const Template: ComponentStory<typeof MoreIcon> = (args) => <MoreIcon {...args} />;

export const More = Template.bind({});
More.args = {};
