import { ComponentStory } from '@storybook/react';
import { Loading as LoadingIcon } from '../Loading';

export default {
  title: 'Components/Icons/Loading',
  component: LoadingIcon,
};

const Template:ComponentStory<typeof LoadingIcon> = (args) => <LoadingIcon {...args} />;

export const Loading = Template.bind({});
Loading.args = {
};
