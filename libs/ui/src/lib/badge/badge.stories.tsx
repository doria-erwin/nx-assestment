import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge as BadgeComponent } from "./badge";

const Story: ComponentMeta<typeof BadgeComponent> = {
    component: BadgeComponent,
    title: "Components/Badge",
};
export default Story;

const Template: ComponentStory<typeof BadgeComponent> = (args) => (
    <BadgeComponent {...args} />
);

export const Badge = Template.bind({});
Badge.args = {
    children: '420'
};
