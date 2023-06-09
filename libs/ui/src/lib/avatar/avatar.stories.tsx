import type { ComponentMeta, ComponentStory } from "@storybook/react";
import profilePic from '../../../assets/placeholders/profile-pic.jpeg';
import { Avatar as AvatarComponent } from "./avatar";

const Story: ComponentMeta<typeof AvatarComponent> = {
    component: AvatarComponent,
    title: "Components/Avatar",
};
export default Story;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
    <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
Avatar.args = {
    label: 'Lorem Ipsum',
    src: profilePic,
    size: 'md'
};
