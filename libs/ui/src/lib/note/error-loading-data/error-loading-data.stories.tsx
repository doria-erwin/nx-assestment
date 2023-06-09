import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ErrorLoadingData as ErrorLoadingDataComponent } from "./error-loading-data";

const Story: ComponentMeta<typeof ErrorLoadingDataComponent> = {
    component: ErrorLoadingDataComponent,
    title: "Components/Note/ErrorLoadingData",
};
export default Story;

const Template: ComponentStory<typeof ErrorLoadingDataComponent> = (args) => (
    <ErrorLoadingDataComponent {...args} />
);

export const ErrorLoadingData = Template.bind({});
ErrorLoadingData.args = {};
