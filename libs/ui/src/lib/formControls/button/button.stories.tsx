import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Calendar, ChevronDown } from "@ui-components";
import { Button as ButtonComponent } from "./button";

const Story: ComponentMeta<typeof ButtonComponent> = {
    component: ButtonComponent,
    title: "Components/FormControls/Button",
    argTypes: {
        onClick: { action: 'clicked' },
        // variant: { options: Variant, control: 'radio' }
    }
};
export default Story;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
    <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
    label: 'Button',
    variant: 'secondary',
};
export const ButtonLeftIcon = Template.bind({});
ButtonLeftIcon.args = {
    label: 'Button',
    variant: 'primary',
    leftIcon: Calendar
};
export const ButtonRightIcon = Template.bind({});
ButtonRightIcon.args = {
    label: 'Button',
    variant: 'primary',
    rightIcon: ChevronDown
};

