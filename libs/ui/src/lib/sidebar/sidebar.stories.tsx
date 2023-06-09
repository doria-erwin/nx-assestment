import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dashboard, Evaluations, Groups, Organisations, Reporting } from "../icons";
import { Sidebar as SidebarComponent } from "./sidebar";

const Story: ComponentMeta<typeof SidebarComponent> = {
    component: SidebarComponent,
    title: "Components/Sidebar",
};
export default Story;

const Template: ComponentStory<typeof SidebarComponent> = (args) => (
    <SidebarComponent {...args} />
);

export const Sidebar = Template.bind({});
Sidebar.args = {
    profile: {
        name: 'Jane Doe',
        email: 'jane@email.com'
    },
    menu: [{
        sectionTitle: 'Overview',
        menuItems: [{
            label: 'Overview',
            onClick: () => null,
            icon: Dashboard,
            key: 'overview'
        }, {
            label: 'Infrastructure',
            onClick: () => null,
            icon: Evaluations,
            key: 'infrastructure'
        }, {
            label: 'Fleet Consumption',
            onClick: () => null,
            icon: Groups,
            key: 'fleet-consumption',
        }]
    }, {
        sectionTitle: 'Admin',
        menuItems: [{
            label: 'Notifications',
            onClick: () => null,
            icon: Reporting,
            key: 'notifications'
        }, {
            label: 'Settings',
            onClick: () => null,
            icon: Organisations,
            key: 'settings'
        }]
    }]
};