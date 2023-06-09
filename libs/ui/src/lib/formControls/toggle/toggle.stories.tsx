import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleComponent from './toggle';

const Story: ComponentMeta<typeof ToggleComponent> = {
    component: ToggleComponent,
    title: "Components/FormControls/Toggle",
};
export default Story;

const Template: ComponentStory<typeof ToggleComponent> = (args) => {

    return (
        <ToggleComponent {...args}/>
    )
};


export const Toggle = Template.bind({});
Toggle.args = {
    disabled: false,
    isToggle: false
}

