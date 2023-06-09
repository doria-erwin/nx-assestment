import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography as TypographyComponent } from "./typography";

const Story: ComponentMeta<typeof TypographyComponent> = {
    component: TypographyComponent,
    title: "Components/Typography",
};
export default Story;

const Template: ComponentStory<typeof TypographyComponent> = (args) => (
    <div className="bg-slate-200 p-2">
        <TypographyComponent {...args} />
    </div>
);

export const Typography = Template.bind({});
Typography.args = {
    children: 'Hello Tailwind',
    color: 'text-C400',
    fontWeight: 'font-black'
};

