import type { ComponentMeta, ComponentStory } from "@storybook/react";
import DropdownComponent from './dropdown';

const Story: ComponentMeta<typeof DropdownComponent> = {
    component: DropdownComponent,
    title: "Components/FormControls/Dropdown",
};
export default Story;

const Template: ComponentStory<typeof DropdownComponent> = (args) => {

    return (
        <DropdownComponent {...args} />
    )
};


export const Dropdown = Template.bind({});
Dropdown.args = {
    label: 'Dropdown Label',
    placeholder: 'Select Item',
    isCheckList: false,
    listItem: [
        {
            value: 1,
            label: 'Item 1'
        },
        {
            value: 2,
            label: 'Item 2'
        },
        {
            value: 3,
            label: 'Item 3'
        },
        {
            value: 4,
            label: 'Item 4'
        },
        {
            value: 5,
            label: 'Item 5'
        }
    ]
}
