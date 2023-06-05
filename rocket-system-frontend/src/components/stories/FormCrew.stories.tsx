import { Meta, StoryObj } from '@storybook/react';
import { FormCrew, CrewFormData } from "../forms/FormCrew";
import { CrewDTO } from '../../dtos/CrewDTO';

export default {
    title: 'Forms/FormCrew',
    component: FormCrew,
    args: {
        crewmenDB: ['Lamina', 'Kriss', 'Shinbei', 'Shinso'],
        handleOperationCrew: (data: Partial<CrewDTO>, crewmenNames: string[]) => {
            console.log('Executing myFunction');
        }
    },

} as Meta<CrewFormData>

export const Default: StoryObj<CrewFormData> = {
}