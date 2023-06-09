import { ComponentStory } from '@storybook/react';
import { Upload as UploadIcon } from '../Upload';

export default {
  title: 'Components/Icons/Upload',
  component: UploadIcon,
};

const Template:ComponentStory<typeof UploadIcon> = (args) => <UploadIcon {...args} />;

export const Upload = Template.bind({});
Upload.args = {
  color: '#3891A1'
};
