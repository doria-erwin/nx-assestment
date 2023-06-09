import { ComponentStory } from '@storybook/react';
import { Calendar as CalendarIcon } from '../Calendar';

export default {
  title: 'Components/Icons/Calendar',
  component: CalendarIcon,
};

const Template:ComponentStory<typeof CalendarIcon> = (args) => <CalendarIcon {...args} />;

export const Calendar = Template.bind({});
Calendar.args = {
  color: '#3891A1'
};
