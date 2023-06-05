import { Meta, StoryObj } from '@storybook/react';
import { FormCrewman, CrewmanFormData } from "../forms/FormCrewman";
import { CrewmanDTO } from '../../dtos/CrewmanDTO';

export default {
    title: 'Forms/FormCrewman',
    component: FormCrewman,
    args: {
        /* crewman?: CrewmanDTO; */
        handleOperationCrewman: (data: Partial<CrewmanDTO>) => {
            console.log('Executing myFunction');
        },

    },

} as Meta<CrewmanFormData>

export const Default: StoryObj<CrewmanFormData> = {
}