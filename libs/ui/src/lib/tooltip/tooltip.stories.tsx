import type { ComponentMeta, ComponentStory } from "@storybook/react";
import  TooltipComponent from './tooltip'
import * as React from 'react';
const Story: ComponentMeta<typeof TooltipComponent> = {
    component: TooltipComponent,
    title: "Components/Tooltip",
};
export default Story;

const Template: ComponentStory<typeof TooltipComponent> = (args) => {

    return (
        <div className="flex w-full h-screen justify-center items-center">
            <p>
                Lorem ipsum  <TooltipComponent {...args}>{args.children}</TooltipComponent>
            </p>
        </div>
    )
};


export const Tooltip = Template.bind({});
Tooltip.args = {
    children: <span><u>hover me</u></span>,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
    position: 'top'
}

