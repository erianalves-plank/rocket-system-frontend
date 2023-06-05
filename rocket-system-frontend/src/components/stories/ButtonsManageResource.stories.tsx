import { Meta, StoryObj } from '@storybook/react';
import { ButtonsManageResource, ChildComponentProps } from "../ButtonsManageResource";

export default {
    title: 'ButtonsManageResource',
    component: ButtonsManageResource,
    args: {
        handleClick: (operation: string) => {
            // Function implementation here
            console.log('Executing myFunction');
        },
        handleClickDelete: () => {
            // Function implementation here
            console.log('Executing myFunction');
        },
    },

} as Meta<ChildComponentProps>

export const Default: StoryObj<ChildComponentProps> = {
}