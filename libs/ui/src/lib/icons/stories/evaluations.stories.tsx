import { ComponentStory } from '@storybook/react';
import { Evaluations as EvaluationsIcon } from '../Evaluations';

export default {
  title: 'Components/Icons/Evaluations',
  component: EvaluationsIcon,
};

const Template:ComponentStory<typeof EvaluationsIcon> = (args) => <EvaluationsIcon {...args} />;

export const Evaluations = Template.bind({});
Evaluations.args = {
};
