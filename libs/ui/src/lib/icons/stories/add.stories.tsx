import { ComponentStory } from '@storybook/react';
import { Add as AddIcon } from '../Add';

export default {
  title: 'Components/Icons/Add',
  component: AddIcon,
};

const Template:ComponentStory<typeof AddIcon> = (args) => <AddIcon {...args} />;

export const Add = Template.bind({});
Add.args = {
  color: '#3891A1'
};
