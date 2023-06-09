import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner as SpinnerComponent } from "./spinner";

const Story: ComponentMeta<typeof SpinnerComponent> = {
    component: SpinnerComponent,
    title: "Components/Spinner",
};
export default Story;

const Template: ComponentStory<typeof SpinnerComponent> = (args) => (
    <SpinnerComponent {...args} />
);

export const Spinner = Template.bind({});
Spinner.args = {
};

