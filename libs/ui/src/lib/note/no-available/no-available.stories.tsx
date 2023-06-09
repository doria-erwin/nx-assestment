import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { NoAvailable as NoAvailableComponent } from "./no-available";

const Story: ComponentMeta<typeof NoAvailableComponent> = {
    component: NoAvailableComponent,
    title: "Components/Note/NoAvailable",
};
export default Story;

const Template: ComponentStory<typeof NoAvailableComponent> = (args) => (
    <NoAvailableComponent {...args} />
);

export const NoAvailable = Template.bind({});
NoAvailable.args = {
    title: 'No Title',
    message: 'Aute commodo officia ad ex sit ipsum quis.'
};
