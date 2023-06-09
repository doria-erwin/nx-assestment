import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Checkbox as CheckboxComponent } from "./checkbox";

const Story: ComponentMeta<typeof CheckboxComponent> = {
    component: CheckboxComponent,
    title: "Components/FormControls/Checkbox",
};
export default Story;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => {
    const [selected, setSelected] = useState<boolean>(false);

    return (
        <CheckboxComponent {...args} isChecked={selected} onClick={setSelected} />
    )
};

export const Checkbox = Template.bind({});
Checkbox.args = {};
