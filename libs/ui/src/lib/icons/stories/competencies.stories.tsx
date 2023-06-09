import { ComponentStory } from '@storybook/react';
import { Competencies as CompetenciesIcon } from '../Competencies';

export default {
  title: 'Components/Icons/Competencies',
  component: CompetenciesIcon,
};

const Template:ComponentStory<typeof CompetenciesIcon> = (args) => <CompetenciesIcon {...args} />;

export const Competencies = Template.bind({});
Competencies.args = {
};
