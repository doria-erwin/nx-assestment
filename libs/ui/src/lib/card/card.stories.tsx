import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card as CardComponent } from "./card";

const Story: ComponentMeta<typeof CardComponent> = {
    component: CardComponent,
    title: "Components/Card",
};
export default Story;

const Template: ComponentStory<typeof CardComponent> = (args) => (
    <CardComponent {...args} />
);

export const Card = Template.bind({});
Card.args = {
    title: 'Critical Reports'
};
