import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Tab as TabComponent } from "./tab";

const Story: ComponentMeta<typeof TabComponent> = {
    component: TabComponent,
    title: "Components/Tab",
    argTypes: {
        onChange: { action: 'click' }
    }
};
export default Story;

const Template: ComponentStory<typeof TabComponent> = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='bg-N75 h-screen'>
            <TabComponent {...args} activeIndex={activeIndex} onChange={setActiveIndex} />
        </div>
    );
}
export const Tab = Template.bind({});
Tab.args = {
    menu: [
        { label: 'Spatial Summary', key: 'spatial_summary' },
        { label: 'Data Set', key: 'data_set' },
        { label: 'Fleet Vehicles', key: 'fleet_vehicles' },
        { label: 'Infrastructure', key: 'infrastructure' },
        { label: 'Energy Management', key: 'energy_management' }
    ]
};
