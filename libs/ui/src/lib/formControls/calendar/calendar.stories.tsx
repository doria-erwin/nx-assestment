import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Calendar as CalendarComponent } from "./calendar";

const Story: ComponentMeta<typeof CalendarComponent> = {
    component: CalendarComponent,
    title: "Components/FormControls/Calendar",
    argTypes: { onChange: { action: 'clicked' }}
};
export default Story;

const Template: ComponentStory<typeof CalendarComponent> = (args) => (
    <CalendarComponent {...args} />
);

export const Calendar = Template.bind({});
Calendar.args = {
};
