import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as FormComponent } from "./form";
import { structure } from './structure';

const Story: ComponentMeta<typeof FormComponent> = {
    component: FormComponent,
    title: "Components/FormControls/Form",
};
export default Story;

const Template: ComponentStory<typeof FormComponent> = (args) => <FormComponent {...args} />;

export const Form = Template.bind({});
Form.args = {
    structure,
    onSubmitForm: (values) => console.log(values)
};
