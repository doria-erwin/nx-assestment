import type { ComponentMeta, ComponentStory } from "@storybook/react";
import InputComponent from './input';

const Story: ComponentMeta<typeof InputComponent> = {
    component: InputComponent,
    title: "Components/FormControls/Input",
};
export default Story;


const Template: ComponentStory<typeof InputComponent> = (args) => {

    return (
        <InputComponent {...args}/>
    )
};


export const Input = Template.bind({});
Input.args = {
    placeholder: 'Enter text here',
    helperText: "Helper text",
    label: "Label",
    value: 'Sample',
    variant: 'default',
    withPrefixIcon: true,
    withSuffixIcon: true,
    type: 'text'
}

export const InputWithoutPlaceholder = Template.bind({});
InputWithoutPlaceholder.args = {
    placeholder: '',
    helperText: "Helper text",
    label: "Label",
    value: '',
    variant: 'default',
    withPrefixIcon: true,
    type: 'text'
}

export const InputError = Template.bind({});
InputError.args = {
    placeholder: "Enter your text here",
    helperText: "Helper text",
    label: "Label",
    value: "Input Error",
    variant: 'error',
    withPrefixIcon: true,
    withSuffixIcon: true
}


export const InputDisabled = Template.bind({});
InputDisabled.args = {
    placeholder: "Enter your text here",
    helperText: "Helper text",
    label: "Label",
    value: "Input Disabed",
    variant: 'disabled',
    withPrefixIcon: true,
    withSuffixIcon: true
}



