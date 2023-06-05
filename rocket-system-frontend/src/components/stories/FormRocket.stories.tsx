import { Meta, StoryObj } from '@storybook/react';
import { FormRocket, RocketFormData } from "../forms/FormRocket";
import { RocketDTO } from '../../dtos/RocketDTO';

export default {
    title: 'Forms/FormRocket',
    component: FormRocket,
    args: {
        /* rocket?: RocketDTO; */
        handleOperationRocket: (data: Partial<RocketDTO>) => {
            console.log('Executing myFunction');
        },

    },

} as Meta<RocketFormData>

export const Default: StoryObj<RocketFormData> = {
}