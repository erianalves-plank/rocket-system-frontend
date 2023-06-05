import { Meta, StoryObj } from '@storybook/react';
import { FormLaunch, LaunchFormData } from "../forms/FormLaunch";
import { LaunchDTO } from '../../dtos/LaunchDTO';

export default {
    title: 'Forms/FormLaunch',
    component: FormLaunch,
    args: {
        /* launch?: LaunchDTO, */
        handleOperationLaunch: (
            data: Partial<LaunchDTO>,
            rocketName: string,
            crewName: string
        ) => {
            console.log('Executing myFunction');
        },

    },

} as Meta<LaunchFormData>

export const Default: StoryObj<LaunchFormData> = {
}