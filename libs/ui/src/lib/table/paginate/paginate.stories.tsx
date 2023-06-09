import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Paginate as PaginateComponent } from "./paginate";

const Story: ComponentMeta<typeof PaginateComponent> = {
    component: PaginateComponent,
    title: "Components/Table/Paginate",
};
export default Story;

const Template: ComponentStory<typeof PaginateComponent> = (args) => <PaginateComponent {...args} />

export const Paginate = Template.bind({});
Paginate.args = {
    totalItems: 100,
    totalPerPage: 10,
    currentPage: 1
};

