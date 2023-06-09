import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumbs as BreadcrumbsComponent } from "./breadcrumbs";

const Story: ComponentMeta<typeof BreadcrumbsComponent> = {
    component: BreadcrumbsComponent,
    title: "Components/Breadcrumbs",
    argTypes: { onClick: { action: 'clicked' } }
};
export default Story;

const Template: ComponentStory<typeof BreadcrumbsComponent> = (args) => (
    <BreadcrumbsComponent {...args} />
);

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
    crumbs: [
        { label: 'Parent', route: '/' },
        { label: 'Child', route: '/' },
        { label: '2nd child', route: '/' }
    ],
    onClick: () => console.log("OK")
};
