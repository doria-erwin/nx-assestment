import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Alert as AlertComponent } from "./alert";

const Story: ComponentMeta<typeof AlertComponent> = {
    component: AlertComponent,
    title: "Components/Alert",
};
export default Story;

const Template: ComponentStory<typeof AlertComponent> = (args) => (
    <AlertComponent {...args} />
);


export const AlertError = Template.bind({});
AlertError.args = {
    type: 'error',
    title: 'Error Message Header',
    description: 'Error message body content.'
};
export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    type: 'success',
    title: 'Success Message Header',
    description: 'Success message body content.'
};
export const AlertInfo = Template.bind({});
AlertInfo.args = {
    type: 'info',
    title: 'Info Message Header',
    description: 'Info message body content.'
};
// export const AlertWarning = Template.bind({});
// AlertWarning.args = {
//     type: 'warning',
//     title: 'Warning Message Header',
//     description: 'Warning message body content.'
// };